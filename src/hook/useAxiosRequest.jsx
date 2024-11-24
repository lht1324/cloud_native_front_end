function useAxiosRequest() {
    const requestAPI = async (
        axiosRequest,
        onSuccess = async (data) => {
        },
        onFailure = async (statusCode) => {
        },
        onError = async (error) => {
        }
    ) => {
        try {
            const res = await axiosRequest;

            if (res.data.isSuccess) {
                await onSuccess(res.data);
            } else {
                console.log(`AxiosRequest [${res.status}]: ${res.data.message}`);
                await onFailure(res.status, res.data.message);
            }
        } catch (error) {
            console.log(`AxiosRequest Error: ${error.message}`);
            await onError(error);
        }
    }

    return { requestAPI };
}

export default useAxiosRequest;