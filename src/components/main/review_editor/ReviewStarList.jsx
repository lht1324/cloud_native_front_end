import "./ReviewStarList.css"
import {memo, useCallback, useEffect, useMemo, useRef, useState} from "react";
import Row from "../../public/Row";
import Column from "../../public/Column";
import StarImage from "../../public/StarImage";
import {throttle} from "lodash";

function ReviewStarList({
    onChangeStar
}) {
    const listAbsoluteX = useRef(0.0)
    /*
        Empty: 0.0
        Half: 0.5
        Full: 1
     */
    const [starStateList, setStarStateList] = useState([0.0, 0.0, 0.0, 0.0, 0.0]);

    // 0, 0.5, 1.0, ... 5.0
    // 0, 1, 2, ... 10
    // 실수로 저장하면 불안하니 정수로 관리하고 보여줄 때 2.0f로 나눠 보여준다.
    const currentStarCount = useRef(0)

    const [isHoverStarList, setIsHoverStarList] = useState(false);

    const onMouseEnter = useCallback(() => setIsHoverStarList(true), [])
    const onMouseLeave = useCallback(() => setIsHoverStarList(false), [])
    
    const onMouseMove = useCallback((e) => {
        const currentMousePosition = Math.round(((e.clientX - listAbsoluteX.current) / 32) * 10) / 10

        if (Array.isArray(starStateList) && currentMousePosition >= 0) {
            const mousePosition = currentMousePosition
            const originalStarStateList = starStateList
            const newStarStateList = originalStarStateList.map((starState, starIndex) => {
                return getStarState(mousePosition, starIndex, starIndex + 1)
            })

            if (JSON.stringify(originalStarStateList) !== JSON.stringify(newStarStateList)) {
                setStarStateList(newStarStateList)
            }
        }
    }, [starStateList])
    const onClickStarList = useCallback(() => {
        currentStarCount.current = starStateList.sum()
        onChangeStar(currentStarCount.current)
    }, [onChangeStar, starStateList])

    useEffect(() => {
        listAbsoluteX.current = Math.round(
            document.querySelector(".review_star_list_wrapper").getBoundingClientRect().x
        )
    }, [])

    useEffect(() => {
        const starCount = currentStarCount.current

        if (starStateList.sum() !== starCount && !isHoverStarList) {
            setStarStateList(prevState => {
                return Array.isArray(prevState) && prevState.map((starState, index) => {
                    return index < starCount
                        ? (starCount - index) === 0.5 ? 0.5 : 1.0
                        : 0.0
                })
            })
        }
    }, [isHoverStarList, starStateList])

    const mounted = useRef(false)

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true
        } else {
            console.log("update")
        }
    })

    return (
        <div
            className="review_star_list_wrapper"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
        >
            <Column>
                <Row onClick={onClickStarList}>{Array.isArray(starStateList) &&
                    starStateList.map((starState, starIndex) => {
                        return <StarImage
                            key={`star${starIndex}`}
                            starState={starState}
                            alt=""
                        />
                    })
                }</Row>
            </Column>
        </div>
    )
}

function getStarState(mousePosition, mouseStart, mouseEnd) {
    if (mousePosition <= mouseStart + 0.2) {
        return 0.0
    } else if (mousePosition > mouseStart + 0.2 && mousePosition <= mouseEnd - 0.5) {
        return 0.5
    } else {
        return 1.0
    }
}

export default memo(ReviewStarList);