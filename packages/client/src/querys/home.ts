import gql from 'graphql-tag';

export const CurrentUser_QUERY = gql`
	query {
		user(email: "toilahoi007@gmail.com") {
			firstName
			name
		}
	}
`;
