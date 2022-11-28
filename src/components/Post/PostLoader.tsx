import ContentLoader from "react-content-loader"

const PostLoader = () => (
	<div style={{ margin: "15px" }}>
		<ContentLoader
			speed={0}
			width={630}
			height={444}
			viewBox="0 0 630 444"
			backgroundColor="#c3c1c1"
			foregroundColor="#dedede"

		>
			<rect x="0" y="0" rx="5" ry="5" width="630" height="350" />
			<rect x="343" y="420" rx="0" ry="0" width="2" height="0" />
			<rect x="356" y="443" rx="0" ry="0" width="1" height="1" />
			<rect x="343" y="444" rx="0" ry="0" width="0" height="1" />
			<rect x="0" y="355" rx="5" ry="5" width="630" height="94" />
		</ContentLoader>
	</div>
)

export default PostLoader