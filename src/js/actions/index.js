export const MY_ACTION = 'MY_ACTION';

export function myAction(payload) {
	return {
		type: MY_ACTION,
		payload: payload
	}
}
