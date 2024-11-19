import {useParams} from "react-router-dom";

function UserInfoPage() {
    const userId = useParams().userId

    // 검증 후 로그인 상태 아니면 로그인 화면으로 돌려주기
    console.log(`id = ${userId}`)

    return (
        <div className="user_info_page_wrapper">
            테스트
        </div>
    )
}

export default UserInfoPage;