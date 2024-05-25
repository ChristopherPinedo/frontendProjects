import heroImg from './resources/images/illustration-hero.svg';
import iconMusic from './resources/images/icon-music.svg';

function OrderSummaryComponent() {
  return (
    <main className=" flex h-full w-full items-center justify-center bg-indigo-100 font-RedHatDisplay">
      <section className="max-w-96">
        <img src={heroImg} className="rounded-t-2xl" />
        <div className=" flex flex-col items-center gap-5 rounded-b-2xl bg-white p-7 text-center sm:p-10">
          <h2 className="text-2xl font-black text-slate-800">Order Summary</h2>
          <p className="text-sm font-medium text-slate-400">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
          <div className=" flex w-full justify-between rounded-xl bg-slate-100 p-4 sm:p-5">
            <div className="flex gap-2 sm:gap-6">
              <img src={iconMusic} />
              <div>
                <p className="text-sm font-black">Annual Plan</p>
                <p className="text-sm font-medium text-slate-400">$55.99/year</p>
              </div>
            </div>
            <button className="text-sm font-bold text-indigo-600 underline hover:text-indigo-400">Change</button>
          </div>
          <div className="flex w-full flex-col gap-2">
            <button className="rounded-xl bg-indigo-600 p-3 text-sm font-black text-white hover:bg-indigo-400">
              Procced to Payment
            </button>
            <button className="rounded-xl p-3 text-sm font-black text-slate-400 hover:text-black">Cancel Order</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export { OrderSummaryComponent };
