import "./UserInfoPage.css"
import {useNavigate, useParams} from "react-router-dom";
import {memo, useCallback, useEffect, useRef, useState} from "react";
import useAxiosRequest from "../../hook/useAxiosRequest";
import {deleteUserInfo, getUserInfoById, putUserInfo} from "../../services/userApi";
import ReviewList from "../public/review_list/ReviewList";
import Spacer from "../public/Spacer";
import Row from "../public/Row";
import TextEditor from "../public/TextEditor";

function UserInfoPage() {
    const { requestAPI } = useAxiosRequest();
    const navigate = useNavigate();

    const userId = useParams().userId

    const [nickname, setNickname] = useState("");
    const [reviewIdList, setReviewIdList] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [isShowReviewList, setIsShowReviewList] = useState(false);

    const rowIdRef = useRef(-1);
    const newIdRef = useRef(userId);
    const newNicknameRef = useRef("")

    const getUserInfoFunction = useCallback(async () => {
        await requestAPI(
            getUserInfoById(userId),
            (data) => {
                console.log(`getUserInfo data = ${JSON.stringify(data)}\nidList = ${JSON.stringify(data.userInfo.reviewIdList)}`);
                setNickname(data.userInfo.nickname);
                setReviewIdList(data.userInfo.reviewIdList);
                setIsLogin(data.isLogin);
                setIsShowReviewList(true);

                rowIdRef.current = data.userInfo.rowId;
                newNicknameRef.current = data.userInfo.nickname;
            },
            (statusCode, message) => {
                setIsShowReviewList(false);
                if (statusCode === 404) {
                    alert(message);
                } else {
                    alert("에러가 발생했습니다. 다시 시도해주세요.");
                }
                navigate(-1);
            },
            (error) => {
                setIsShowReviewList(false);
                console.log(`getUserInfo Error: ${JSON.stringify(error)}`);
                alert("에러가 발생했습니다. 다시 시도해주세요.");
                navigate(-1);
            }
        )
    }, []);

    const onClickUpdateUserInfo = useCallback(async () => {
        if (newIdRef.current.length !== 0 && newNicknameRef.current.length !== 0) {
            await requestAPI(
                putUserInfo({
                    rowId: rowIdRef.current,
                    id: userId,
                    nickname: newNicknameRef.current,
                    reviewIdList: reviewIdList
                }),
                (data) => {
                    alert("유저 정보가 수정되었습니다.")
                },
                (statusCode, message) => {
                    alert("유저 정보 수정에 실패했습니다. 다시 시도해주세요.")
                },
                (error) => {
                    console.log(`onClickUpdateUserInfo Error: ${error.message}`)
                    alert("유저 정보가 수정 중 에러가 발생했습니다.")
                }
            )
        } else {
            if (newIdRef.current.length === 0 && newNicknameRef.current.length === 0) {
                alert("아이디와 닉네임을 입력해주세요");
                return;
            }

            if (newIdRef.current.length === 0) {
                alert("아이디를 입력해주세요");
                return;
            }

            if (newNicknameRef.current.length === 0) {
                alert("닉네임을 입력해주세요");
            }
        }
    }, []);

    const onClickWithdrawal = useCallback(async () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("정말 탈퇴하시겠어요?")) {
            // eslint-disable-next-line no-restricted-globals
            if (confirm("탈퇴 후엔 데이터를 복구할 수 없습니다.\n그래도 괜찮다면 '확인'을 눌러주세요.")) {
                await requestAPI(
                    deleteUserInfo(userId),
                    (data) => {
                        alert("회원 탈퇴되었습니다.");
                        navigate("/");
                    },
                    (statusCode, message) => {
                        console.log(`onClickWithdrawal [${statusCode}]: ${message}`);
                        alert("탈퇴에 실패했습니다. 다시 시도해주세요.");
                    },
                    (error) => {
                        console.log(`onClickWithdrawal Error: ${error.message}`);
                        alert("서버 에러가 발생했습니다. 다시 시도해주세요.");
                    }
                )
            }
        }
    }, []);

    useEffect(() => {
        getUserInfoFunction();
    }, []);

    useEffect(() => {
        if (nickname.length > 0 && !isLogin) {
            alert("자동 로그아웃되었습니다. 다시 로그인해주세요.");
            navigate("/");
        }
    }, [navigate, nickname, isLogin]);

    return (
        <div className="user_info_page_wrapper">
            <Spacer height="36px"/>
            <h2>내 정보</h2>
            <Spacer height="24px"/>
            <Row>
                <div className="user_info_page_info_edit_container">
                    <h3>회원 정보</h3>
                    <Spacer height="12px"/>
                    <div className="user_info_page_info_edit_border">
                        <Row className="user_info_page_info_edit_box_row">
                            <span>아이디</span>
                            <Spacer width="12px"/>
                            <TextEditor
                                className="user_info_page_info_edit_box"
                                initialValue={userId}
                                onChange={(text) => { newIdRef.current = text }}
                                isSingleLine={true}
                            />
                        </Row>
                        <Spacer height="12px" />
                        <Row className="user_info_page_info_edit_box_row">
                            <span>닉네임</span>
                            <Spacer width="12px"/>
                            <TextEditor
                                className="user_info_page_info_edit_box"
                                initialValue={nickname}
                                onChange={(text) => { newNicknameRef.current = text }}
                                isSingleLine={true}
                            />
                        </Row>
                        <Spacer height="12px"/>
                        <Row className="user_info_page_info_button_box_row">
                            <button className="user_info_page_put_button" onClick={onClickUpdateUserInfo}>수정</button>
                            <Spacer width="12px"/>
                            <button className="user_info_page_delete_button" onClick={onClickWithdrawal}>탈퇴</button>
                        </Row>
                    </div>
                </div>
                <div className="user_info_page_review_list_container">
                    <h3>작성하신 리뷰</h3>
                    <Spacer height="12px"/>
                    {isShowReviewList && <ReviewList
                        id={userId}
                        reviewIdList={reviewIdList}
                    />}
                </div>
            </Row>
        </div>
    )
}

export default memo(UserInfoPage);