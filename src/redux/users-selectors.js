export const getStateUsers = (state) => {
    return state.usersPage.users
}

export const getStatePageSize = (state) => {
    return state.usersPage.pageSize
}

export const getStateTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getStateCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getStateIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getStateFollowingProcessing = (state) => {
    return state.usersPage.followingProcessing
}
