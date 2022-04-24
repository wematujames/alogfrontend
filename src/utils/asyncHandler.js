export default function asyncHandler(cb, dispatch, type) {
    return async () => {
        try {
            await cb();
        } catch (err) {
            dispatch({type, payload: err.response.data.msg});
        }
    };
}