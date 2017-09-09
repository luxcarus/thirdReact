export const SIGN_IN = 1
export const SIGN_OUT = 2

export const UPDATE_MEMBER_STATUS = 'UPDATE_MEMBER_STATUS'
export function updateMemberStatus(args) {
  console.log('updateMemberStatus in actions')
  return {
    type: UPDATE_MEMBER_STATUS,
    id: args.id,
    name: args.name,
    isMember: args.isMember
  }
}