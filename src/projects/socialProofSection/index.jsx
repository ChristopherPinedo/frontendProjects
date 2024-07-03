import imageAnne from './resources/images/image-anne.jpg';
import imageColton from './resources/images/image-colton.jpg';
import imageIrene from './resources/images/image-irene.jpg';
import iconStar from './resources/images/icon-star.svg';

const RatingArr = [
  {
    rating: {
      level: '5',
      icon: iconStar,
    },
    message: 'Rated 5 Stars in Reviews',
  },
  {
    rating: {
      level: '5',
      icon: iconStar,
    },
    message: 'Rated 5 Stars in Report Guru',
  },
  {
    rating: {
      level: '5',
      icon: iconStar,
    },
    message: 'Rated 5 Stars in BestTech',
  },
];
const CommentsArr = [
  {
    image: {
      src: imageColton,
      alt: 'Coltonprofilepic',
    },
    fullName: 'Colton Smith',
    status: 'Verified Buyer',
    comment:
      '" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "',
  },
  {
    image: {
      src: imageIrene,
      alt: 'IreneProfilepic',
    },
    fullName: 'Irene Roberts',
    status: 'Verified Buyer',
    comment:
      '" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "',
  },
  {
    image: {
      src: imageAnne,
      alt: 'AnneProfilepic',
    },
    fullName: 'Anne Wallace',
    status: 'Verified Buyer',
    comment:
      '" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "',
  },
];

export default function SocialProofSection() {
  const projectColors = {
    veryDarkMagenta: 'hsl(300, 43%, 22%)',
    softPink: 'hsl(333, 80%, 67%)',
    darkGrayishMagenta: 'hsl(303, 10%, 53%)',
    lightGrayishMagenta: 'hsl(300, 24%, 96%)',
    white: 'hsl(0, 0%, 100%)',
  };

  function alignDetection(i) {
    if (i % 3 === 0) {
      return 'start';
    } else if (i % 3 === 1) {
      return 'center';
    } else if (i % 3 === 2) {
      return 'end';
    }
  }

  return (
    <main
      className=" container mx-auto grid h-screen w-full max-w-screen-lg gap-8 md:grid-cols-2"
      style={{ backgroundColor: projectColors.white, color: 'white' }}
    >
      <section className="my-auto">
        <div className="flex max-w-96 flex-col gap-6">
          <p className="text-5xl font-bold" style={{ color: projectColors.veryDarkMagenta }}>
            10,000+ of our users love our products.
          </p>
          <p className="font-semibold" style={{ color: projectColors.darkGrayishMagenta }}>
            We only provide great products combined with excellent customer service. See what our satisfied customers
            are saying about our services.
          </p>
        </div>
      </section>
      <section className="my-auto">
        <div className="grid grid-rows-3 gap-6">
          {RatingArr.map((ele, i) => {
            let alignClass = alignDetection(i);
            console.log(alignClass);
            return (
              <div
                key={i}
                className="flex min-w-96 gap-6 rounded-xl p-6 "
                style={{ backgroundColor: projectColors.lightGrayishMagenta, justifySelf: alignClass }}
              >
                <div className="flex h-4 w-fit gap-1">
                  <img src={ele.rating.icon} />
                  <img src={ele.rating.icon} />
                  <img src={ele.rating.icon} />
                  <img src={ele.rating.icon} />
                  <img src={ele.rating.icon} />
                </div>
                <p className="font-bold" style={{ color: projectColors.veryDarkMagenta }}>
                  {ele.message}{' '}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="md:col-span-2">
        <div className="grid h-80 grid-cols-3 gap-6">
          {CommentsArr.map((ele, i) => {
            let alignClass = alignDetection(i);
            return (
              <div
                key={i}
                className="flex min-h-64 flex-col gap-6 rounded-xl p-6"
                style={{ backgroundColor: projectColors.veryDarkMagenta, alignSelf: alignClass }}
              >
                <div className="flex items-center gap-4">
                  <img className=" size-16 rounded-full" src={ele.image.src} alt={ele.image.alt} />
                  <div className="flex flex-col">
                    <span className="font-bold">{ele.fullName}</span>
                    <span className="font-semibold" style={{ color: projectColors.softPink }}>
                      {ele.status}
                    </span>
                  </div>
                </div>
                <p className="font-semibold">{ele.comment}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
