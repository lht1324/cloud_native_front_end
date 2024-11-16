import "./ReviewStarList.css"
import FullStar from "../../../assets/image/ic_star_full.png"
import HalfStar from "../../../assets/image/ic_star_half.png"
import EmptyStar from "../../../assets/image/ic_star_empty.png"
import {useEffect, useState} from "react";
import Row from "../../public/Row";
import Column from "../../public/Column";
import {getIntList} from "../../../js/functions";

/*
    Empty: 0.0
    Half: 0.5
    Full: 1
 */
const starStateList = [
    0.0, 0.0, 0.0, 0.0, 0.0
]

function ReviewStarList({
    onChangeStar
}) {
    // 0, 0.5, 1.0, ... 5.0
    // 0, 1, 2, ... 10
    // 실수로 저장하면 불안하니 정수로 관리하고 보여줄 때 2.0f로 나눠 보여준다.
    const [currentStarCount, setCurrentStarCount] = useState(0);
    const [currentMousePosition, setCurrentMousePosition] = useState(0.0);

    const onMouseMove = (e) => {
        const listAbsoluteX = Math.round(
            document.querySelector(".review_star_list_container").getBoundingClientRect().x
        )

        const result = Math.round(((e.clientX - listAbsoluteX) / 32) * 10) / 10

        if (result >= 0) {
            setCurrentMousePosition(result)
            setCurrentStarCount(starStateList.sum())

            onChangeStar(currentStarCount)
        }
    }

    return (
        <div className="review_star_list_container" onMouseMove={(e) => onMouseMove(e)}>
            <Column>
                <Row>{
                    getIntList(5).map((starIndex) => {
                        const starSrc = getStar(starIndex, starIndex + 1, currentMousePosition)

                        return <img
                            key={`star${starIndex}`}
                            src={starSrc}
                            alt=""
                            style={{width: "32px", height: "32px"}}
                        />
                    })
                }</Row>
            </Column>
            <p style={{ width: "fit-content", justifySelf: "end"}}>{`${currentStarCount}점`}</p>
        </div>
    )
}

function getStar(mouseStart, mouseEnd, mousePosition) {
    if (mousePosition <= mouseStart + 0.2) {
        starStateList[mouseStart] = 0.0
        return EmptyStar;
    } else if (mousePosition > mouseStart + 0.2 && mousePosition <= mouseEnd - 0.5) {
        starStateList[mouseStart] = 0.5
        return HalfStar;
    } else {
        starStateList[mouseStart] = 1.0
        return FullStar;
    }
}

export default ReviewStarList;