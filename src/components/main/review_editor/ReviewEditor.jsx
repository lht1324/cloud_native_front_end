import "./ReviewEditor.css"
import ReviewStarList from "./ReviewStarList";
import Column from "../../public/Column";
import {memo, useCallback, useEffect, useRef} from "react";
import Spacer from "../../public/Spacer";
import TextEditor from "../../public/TextEditor";
import useAxiosRequest from "../../../hook/useAxiosRequest";
import {postReview} from "../../../services/reviewApi";
import {getUserInfoById, putUserInfo} from "../../../services/userApi";

function ReviewEditor({
    userInfo,
}) {
    const { requestAPI } = useAxiosRequest();

    const idRef = useRef("");
    const nicknameRef = useRef("");

    const storeNameRef = useRef("")
    const reviewTextRef = useRef("")
    const starCountRef = useRef(0.0)

    const onChangeStoreName = useCallback((text) => {
        if (!text.includes("\n")) {
            storeNameRef.current = text
        }
    }, [])
    const onChangeReviewText = useCallback((text) => {
        if (!text.includes("\n")) {
            reviewTextRef.current = text
        }
    }, [])
    const onChangeStar = useCallback((count) => {
        starCountRef.current = count
    }, [])
    const onClickFinishButton = useCallback(async () => {
        if (storeNameRef.current.length !== 0 && reviewTextRef.current.length !== 0) {
            await postReviewInside();
        } else {
            alert("가게 이름과 리뷰를 전부 입력해주세요.")
        }
    }, [])

    const postReviewInside = useCallback(async () => {
        await requestAPI(
            postReview({
                storeName: storeNameRef.current,
                author: userInfo.nickname,
                review: reviewTextRef.current,
                starCount: starCountRef.current,
            }),
            async (data) => {
                await console.log(`id = ${idRef.current}`);
                await getUser(data.reviewRowId);
            },
            (statusCode, message) => {
                console.log(`postReview [${statusCode}]: ${message}`);
            },
            (error) => {
                console.log(`postReview Error: ${error.message}`);
            }
        )
    }, [requestAPI, userInfo.nickname])

    const getUser = useCallback(async (newReviewId) => {
        await requestAPI(
            getUserInfoById(idRef.current),
            async (data) => {
                await putUser(data.userInfo, newReviewId);
            },
            (statusCode, message) => {
                console.log(`getUser [${statusCode}]: ${message}`);
            },
            (error) => {
                console.log(`getUser Error: ${error.message}`);
            }
        )
    }, [requestAPI, userInfo.id])

    const putUser = useCallback(async ({ rowId, id, nickname, reviewIdList }, newReviewId) => {
        console.log()
        await requestAPI(
            putUserInfo({
                rowId: rowId,
                id: id,
                nickname: nickname,
                reviewIdList: [...reviewIdList, newReviewId]
            }),
            (data) => {
                alert("리뷰가 추가되었습니다.")
                window.location.reload();
            },
            (statusCode, message) => {
                console.log(`putUser [${statusCode}]: ${message}`);
            },
            (error) => {
                console.log(`putUser Error: ${error.message}`);
            }
        )
    }, [requestAPI])

    useEffect(() => {
        idRef.current = userInfo.id;
        nicknameRef.current = userInfo.nickname;
    }, [userInfo])

    return (
        <div className="review_editor_wrapper">
            <Column className="review_editor_container">
                <TextEditor className="editor_store_name" placeholder="가게 이름" onChange={onChangeStoreName} isSingleLine={true}/>
                <TextEditor className="editor_review_text" placeholder="리뷰" onChange={onChangeReviewText}/>
                <Spacer height="15px"/>
                <ReviewStarList className="review_star" onChangeStar={onChangeStar}/>
                <Spacer height="15px"/>
                <button className="finish_button" onClick={onClickFinishButton}>작성 완료</button>
            </Column>
        </div>
    )
    // 리뷰 왼쪽 리스트 오른쪽 하자
}

export default memo(ReviewEditor);