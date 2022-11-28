import ContentLoader from "react-content-loader"

const FullPostLoader = () => (
	<ContentLoader
		speed={0}
		width={1000}
		height={838}
		viewBox="0 0 1000 838"
		backgroundColor="#c3c1c1"
		foregroundColor="#dedede"
	>
		<rect x="343" y="420" rx="0" ry="0" width="2" height="0" />
		<rect x="356" y="443" rx="0" ry="0" width="1" height="1" />
		<rect x="343" y="444" rx="0" ry="0" width="0" height="1" />
		<rect x="0" y="0" rx="5" ry="5" width="1000" height="706" />
		<rect x="0" y="710" rx="5" ry="5" width="1000" height="132" />
	</ContentLoader>
)

export default FullPostLoader