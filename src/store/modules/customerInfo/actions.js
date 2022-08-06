export function changeInfo(info) {
    console.log('Action ChangeInfo')

    return {
        type: 'customerInfo/CHANGE_INFO',
        payload: { info },
    }
}

export function getNewInfo() {
    console.log('Action getNewInfo')

    return {
        type: 'customerInfo/GET_NEW_INFO'
    }
}