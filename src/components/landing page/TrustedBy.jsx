import dictSVG from '../../assets/DICT-logo.svg';
import psiteSVG from '../../assets/PSITE-logo.svg';
import korondalSVG from '../../assets/KoronadalCity-logo.svg';

export default function TrustedBy() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted and Approved by
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <img
                className="col-span-1 max-h-12 w-full object-contain"
                src={korondalSVG}
                alt="Korondal-Logo"
                width={158}
                height={48}
            />
            <img
                className="col-span-1 max-h-12 w-full object-contain"
                src={dictSVG}
                alt="DICT-Logo"
                width={158}
                height={48}
            />
            <img
                className="col-span-1 max-h-12 w-full object-contain"
                src={psiteSVG}
                alt="PSITE-logo"
                width={158}
                height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  