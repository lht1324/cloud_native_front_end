import "./ReviewEditor.css"
import ReviewStarList from "./ReviewStarList";
import Column from "../../public/Column";
import {memo, useCallback, useRef, useState} from "react";
import Spacer from "../../public/Spacer";
import TextEditor from "../../public/TextEditor";

function ReviewEditor() {
    const storeNameRef = useRef("")
    const reviewTextRef = useRef("")
    const starCountRef = useRef(0.0)

    const onChangeStoreName = useCallback((text) => {
        if (text.takeLast !== "\n") {
            storeNameRef.current = text
        }
    }, [])
    const onChangeReviewText = useCallback((text) => {
        if (text.takeLast !== "\n") {
            reviewTextRef.current = text
        }
    }, [])
    const onChangeStar = useCallback((count) => {
        starCountRef.current = count
    }, [])
    const onClickFinishButton = useCallback(() => {
        console.log(`Review\n${reviewTextRef.current}\nstarCount = ${starCountRef.current}`)
    }, [])

    return (
        <div className="review_editor_wrapper">
            <Column className="review_editor_container">
                <TextEditor className="editor_store_name" placeholder="가게 이름" onChange={onChangeStoreName} rows={1}/>
                <TextEditor className="editor_review_text" placeholder="리뷰" onChange={onChangeReviewText}/>
                <Spacer length={15}/>
                <ReviewStarList className="review_star" onChangeStar={onChangeStar}/>
                <Spacer length={15}/>
                <button className="finish_button" onClick={onClickFinishButton}>작성 완료</button>
            </Column>
        </div>
    )
    // 리뷰 왼쪽 리스트 오른쪽 하자
}

export default memo(ReviewEditor);