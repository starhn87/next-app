import Seo from "../../components/Seo";

interface IProps {
  params: {
    params: string[];
  };
}

interface IParams {
  params: string[];
}

export default function Detail({ params }: IParams) {
  const [title, id]: string[] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }: IProps) {
  return {
    props: { params },
  };
}
