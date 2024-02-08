import ContentLoader from 'react-content-loader';

export default function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="131" cy="123" r="112" />
      <rect x="-4" y="247" rx="6" ry="6" width="280" height="28" />
      <rect x="-2" y="287" rx="6" ry="6" width="280" height="108" />
      <rect x="2" y="416" rx="6" ry="6" width="87" height="32" />
      <rect x="150" y="410" rx="20" ry="20" width="129" height="43" />
    </ContentLoader>
  );
}
