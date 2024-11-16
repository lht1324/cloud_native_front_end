import "./MainBody.css"
import ReviewEditor from "./review_editor/ReviewEditor";
import Spacer from "../public/Spacer";
import Row from "../public/Row";
import Column from "../public/Column";

function MainBody() {
    return (
        <div className="main_body_container">
            <Spacer length={15}/>
            <div className="introduction_container">
                <p>오늘도 먹고살기 위해 점심 메뉴를 검색한 당신.</p>
                <p>회식 맛집, 인스타 핫플, 갬성 술집들이 주루룩 나옵니다.</p>
                <p>근데 그걸 왜 자꾸 <b>점심</b>에 보여줄까요?</p>
                <p>그냥 오후를 위한 든든하고 맛있는 한 끼가 필요할 뿐인데...</p>
                <p>이런 생각을 하신 분들을 위해 만들었습니다.</p>
            </div>
            <Spacer length={15}/>
            <Row style={{ justifyContent: "center" }}>
                <Column>
                    <h3>리뷰 작성하기</h3>
                    <ReviewEditor/>
                </Column>
                <Column>
                    <h3>다른 분들의 리뷰</h3>
                    <ReviewEditor/>
                </Column>
            </Row>
        </div>
    )
}

export default MainBody;