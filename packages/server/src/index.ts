import app from './app';

const PORT = process.env.PORT || 5000;
const URL = process.env.URL || 'http://localhost';
app.listen(PORT, () => {
	// tslint:disable-next-line
	console.log(`🚀 Server is listening on ${URL}:${PORT}/graphql`);
});
