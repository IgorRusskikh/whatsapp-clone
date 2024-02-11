import Image from 'next/image';

const DefaultScreen = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center relative">
      <div className="flex flex-col items-center w-[53%]">
        <div>
          <Image
            src="/native-desktop-hero_a22b846aefcd2de817624e95873b2064.png"
            width={320}
            height={188}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center text-[#d1d7db] font-light mt-7">
          <h1 className="text-3xl">Скачайте WhatsApp для Windows</h1>
          <div className="text-center text-[#8696a0] text-sm mt-4">
            Скачайте приложение для Windows с функцией звонков, демонстрации
            экрана и более высокой скоростью работы.
          </div>
          <div className="mt-7">
            <button className="text-[#111b21] bg-[#00a884] px-5 py-2 rounded-2xl hover:bg-[#06cf9c] transition-all duration-300">
              <div className="text-sm font-medium">Скачать приложение</div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 absolute bottom-10 text-[#667781] text-sm">
        <span>
          <Image src="/svg/lock.svg" width={12} height={12} alt="" />
        </span>
        Защищено сквозным шифрованием
      </div>
    </div>
  );
};

export default DefaultScreen;
