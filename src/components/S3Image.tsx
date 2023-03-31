
const MEDIA_BUCKET = "https://django-portfolio-media-files.s3.eu-central-1.amazonaws.com/"

export default function S3Image(props: { src: string }) {
    return (
        <img 
        src={MEDIA_BUCKET + props.src}
        alt="new"
      />
    )
}