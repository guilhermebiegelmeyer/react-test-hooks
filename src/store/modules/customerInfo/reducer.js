import produce from 'immer'

const INITIAL_STATE = {
    info: 'Info Inicial'
}

export default function customerInfo(state = INITIAL_STATE, { type, payload }) {
    return produce(state, (draft) => {
        switch (type) {
            case 'customerInfo/CHANGE_INFO': {
                console.log('REDUCER customerInfo/CHANGE_INFO = ', payload.info)
                draft.info = payload.info
                break
            }
            default:
        }
    })
}