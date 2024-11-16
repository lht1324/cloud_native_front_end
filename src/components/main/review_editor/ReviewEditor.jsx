import "./ReviewEditor.css"
import ReviewStarList from "./ReviewStarList";
import Column from "../../public/Column";
import {useState} from "react";
import Spacer from "../../public/Spacer";
import Row from "../../public/Row";

function ReviewEditor() {
    const [storeName, setStoreName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [starCount, setStarCount] = useState(0.0);

    const onChangeStoreName = (e) => {
        setStoreName(e.target.value)
    }
    const onChangeReviewText = (e) => {
        setReviewText(e.target.value)
    }
    const onChangeStar = (count) => {
        setStarCount(count)
    }
    const onClickFinishButton = () => {
        console.log(`Review\n${reviewText}\nstarCount = ${starCount}`)
    }

    return (
        <div className="review_editor_container">
            <Column
                className="review_editor_wrapper"
                style={{
                    width: "max-content",
                    alignItems: "flex-end",
                    justifySelf: "center"
                }}
            >
                <textarea className="editor" style={{ minHeight: "50px"}} placeholder="가게 이름" value={storeName} onChange={(e) => onChangeStoreName(e)}/>
                <textarea className="editor" placeholder="리뷰" value={reviewText} onChange={(e) => onChangeReviewText(e)}/>
                <Spacer length={15}/>
                <ReviewStarList className="review_star" onChangeStar={(count) => onChangeStar(count)}/>
                <Spacer length={15}/>
                <button className="finish_button" onClick={() => onClickFinishButton()}>작성 완료</button>
            </Column>
            <div style={{ width: "40vw"}}></div>
        </div>
    )
    // 리뷰 왼쪽 리스트 오른쪽 하자
}

export default ReviewEditor;