import "./ReviewEditor.css"
import ReviewStarList from "./ReviewStarList";
import Column from "../../public/Column";
import {useCallback, useState} from "react";
import Spacer from "../../public/Spacer";
import TextEditor from "../../public/TextEditor";
import {useSimpleCallback} from "../../../hook/useSimpleCallback";

function ReviewEditor() {
    const [storeName, setStoreName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [starCount, setStarCount] = useState(0.0);

    const onChangeStoreName = useCallback((e) => {
        setStoreName(e.target.value)
    }, [])
    const onChangeReviewText = useCallback((e) => {
        setReviewText(e.target.value)
    }, [])
    const onChangeStar = useCallback((count) => {
        setStarCount(count)
    }, [])
    const onClickFinishButton = useCallback(() => {
        console.log(`Review\n${reviewText}\nstarCount = ${starCount}`)
    }, [])

    return (
        <div className="review_editor_wrapper">
            <Column
                className="review_editor_wrapper"
                style={{
                    width: "max-content",
                    alignItems: "flex-end",
                    justifySelf: "center"
                }}
            >
                <TextEditor className="editor" placeholder="가게 이름" value={storeName} onChange={(e) => onChangeStoreName(e)}/>
                <TextEditor className="editor" placeholder="리뷰" value={reviewText} onChange={(e) => onChangeReviewText(e)}/>
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