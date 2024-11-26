import "./MainBody.css"
import ReviewEditor from "./review_editor/ReviewEditor";
import Spacer from "../public/Spacer";
import Row from "../public/Row";
import Column from "../public/Column";
import ReviewList from "../public/review_list/ReviewList";
import RatioSpacer from "../public/RatioSpacer";
import {memo, useCallback} from "react";
import {useNavigate} from "react-router-dom";

function MainBody({
    isLoggedIn,
    userInfo,
    reviewIdList = [],
}) {
    const navigate = useNavigate();

    const onClickLoginButton = useCallback(() => {
        navigate("/signin")
    }, [navigate])

    return (
        <div className="main_body_wrapper">
            <Spacer height="24px"/>
            <div className="introduction_wrapper">
                <p>일도 다 먹고살자고 하는 것 아니겠습니까?</p>
                <p>오늘도 어김없이 점심 메뉴를 검색한 당신.</p>
                <p>회식 맛집, 인스타 핫플, 갬성 술집들이 주루룩 나옵니다.</p>
                <p>근데 그걸 왜 자꾸 점심에 보여줄까요?</p>
                <p>그냥 오후를 위한 든든하고 맛있는 한 끼가 필요할 뿐인데...</p>
                <p>이런 생각을 하신 분들을 위해 만들었습니다.</p>
                <br/>
                <p>여러분들이 점심에 드셨던 맛있는 밥집을 적어주세요.</p>
                <p>당신의 점심을 건네고, 다른 사람의 점심을 받는 사이트.</p>
                <p><b>ㅇㅈㅁ</b>입니다.</p>
            </div>
            <Spacer height="48px"/>
            <Row className="main_content_container">
                <div className="main_content_review_editor_container">
                    <Column className="main_content_review_editor">
                        <h3>리뷰 작성하기</h3>
                        <Spacer height="15px" />
                        <ReviewEditor userInfo={userInfo}/>
                    </Column>
                    {!isLoggedIn && <div className="main_content_review_editor_hover">
                        <button
                            className="main_content_review_editor_login_button"
                            onClick={onClickLoginButton}
                        >
                            로그인 후<br/>리뷰를 작성해주세요!
                        </button>
                    </div>}
                </div>
                <RatioSpacer isHorizontal={false} ratio={5}/>
                <Column>
                    <h3>다른 분들의 리뷰</h3>
                    <Spacer height="15px" />
                    <ReviewList
                        reviewIdList={reviewIdList}
                    />
                </Column>
            </Row>
        </div>
    )
}

export default memo(MainBody);