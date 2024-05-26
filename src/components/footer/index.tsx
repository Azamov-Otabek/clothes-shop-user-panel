import { Container } from "@components"

function index() {
  return (
    <footer>
        <Container>
           <div>
                <div className="flex justify-between">
                    <ul>
                        <li className="font-medium text-[16px] mb-[15px]">О нас</li>
                        <li className="text-[13px] text-[#00000098] mb-[15px]">Пункты выдачи</li>
                        <li className="text-[13px] text-[#00000098]">Вакансии</li>
                    </ul>
                    <ul>
                        <li className="font-medium text-[16px] mb-[15px]">Пользователям</li>
                        <li className="text-[13px] text-[#00000098] mb-[15px]">Связваться с нами</li>
                        <li className="text-[13px] text-[#00000098]">Вопрос - Ответ</li>
                    </ul>
                    <ul>
                        <li className="font-medium text-[16px] mb-[15px]">Для предпринимателей</li>
                        <li className="text-[13px] text-[#00000098] mb-[15px]">Продавайте на Uzum</li>
                        <li className="text-[13px] text-[#00000098]">Вход для продвацев</li>
                    </ul>
                    <ul className="pb-[100px]">
                        <li className="font-medium text-[16px] mb-[15px]">Скачать приложение</li>
                        <div className="flex gap-[30px] items-center">
                            <img className="w-[100px] h-[50px] object-cover" src="https://rupay.money/media/pages/kak-oplatit/appstore/fef6f5570b-1706450079/appstore-300x180.webp" alt="APP STORE" />
                            <img className="w-[100px] h-[50px] object-cover" src="https://play.google/howplayworks/static/assets/social/share_google_play_logo.png" alt="Play Market" />
                        </div>    
                    </ul>
                </div>
                <hr/>
                <div className="flex justify-between items-center py-[20px]">
                    <div className="flex gap-[15px]">
                        <p className="text-[14px] font-medium">Соглашение о конфиденциальности</p>
                        <p className="text-[14px] font-medium">Пользовательское соглашение</p>
                    </div>
                    <p className="text-[11px] text-[#0000005d]">«2024© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
                </div>
           </div>
            
        </Container>
    </footer>
  )
}

export default index