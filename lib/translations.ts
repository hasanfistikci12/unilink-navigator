export type Language = 'tr' | 'et' | 'ru' | 'en' | 'ua' | 'ar';

export const translations = {
    tr: {
        common: {
            appName: 'Unilink Navigator',
            subtitle: 'Güvenli Destek Platformu',
            quickExit: 'Hızlı Çıkış',
            emergency: 'Acil Yardım',
            menu: 'Menü',
            back: 'Geri',
            yes: 'Evet',
            no: 'Hayır',
            loading: 'Yükleniyor...',
            anonymous: 'Anonim kullanılır. Hesap gerekmez. Tüm bilgiler oturum bitince otomatik silinir.',
            anonymousTitle: 'Anonim kullanılır',
            anonymousDesc: 'Hesap gerekmez. Tüm bilgiler oturum bitince otomatik silinir.',
            safetyPlan: 'GÜVENLİK PLANI',
            rights: 'HAKLAR',
            nearby: 'YAKINIMDA',
            security: 'GÜVENLİK',
            getHelp: 'YARDIM AL',
            call: 'Ara',
            ariaCall: 'numarasını ara',
        },
        successStories: {
            title: 'BAŞARI HİKAYELERİ',
            subtitle: 'Herkesin bir hikayesi vardır. İşte Unilink ile hayatını değiştirenlerin ilham veren yolculukları.',
            tellStory: 'BİZE HİKAYENİ ANLAT',
            allStories: 'TÜM HİKAYELER',
            stories: [
                { name: "Elif & Can", text: "Unilink sayesinde güvenli bir sığınağa ulaştık. Artık korkmadan geleceğe bakabiliyoruz." },
                { name: "Mehmet", text: "Hukuki haklarımı bilmiyordum. Rehberler sayesinde sürecimi yönetebildim ve oturum iznimi aldım." },
                { name: "Ayşe", text: "Yalnız hissettiğim anda acil yardım butonu hayatımı kurtardı. Destek ekibi her an yanımdaydı." },
                { name: "Selin", text: "Dijital güvenlik önlemleriyle izimi kaybettirdim. Şimdi yeni bir şehirde, huzurlu bir hayatım var." },
                { name: "Burak", text: "Barınma sorunumu çözmekte çok zorlanıyordum. Platformdaki yönlendirmelerle kalacak yer buldum." }
            ]
        },
        landing: {
            heroTitle: 'Unilink Navigator',
            heroSubtitle: 'Güvenli Destek Platformu',
            heroDescription: 'Unilink Navigator, Estonya’daki Unilink Multikultuurne Keskus tarafından yürütülen; kadınlar, anneler ve çocuklar için güvenli, çok dilli, empati temelli bir dijital rehberlik ve yönlendirme sistemidir. Sistem; destek arayan kişilerin doğru bilgiye, haklarına ve koruyucu kaynaklara güvenli biçimde ulaşmasını hedefler.',
            safetyCheck: 'Şu an güvende misin?',
            yesContinue: 'Güvendeyim',
            unsure: 'Emin Değilim',
            noEmergency: 'Tehlikede',
            emergencyContacts: 'Acil Yardım Hatları',
            contactUs: 'BİZİMLE İLETİŞİME GEÇ',
            emergencyAi: 'ACİL DESTEK (AI)',
            coreFocusTitle: 'Unilink Navigator’un merkezi ve değişmez odağı:',
            coreFocus1: 'Kadın güvenliği',
            coreFocus2: 'Anne ve çocuk güvenliği',
            coreFocus3: 'Güçlendirme (empowerment)',
            coreFocus4: 'Mahremiyet ve veri güvenliği',
            coreFocus5: 'Şiddet, istismar ve risk durumlarında koruyucu yönlendirme',
            coreFocusDesc: 'Bu odak doğrultusunda sistem, kullanıcıyı yargılamadan dinleyen, sakinleştiren, seçenek sunan ve güvenli kaynaklara yönlendiren bir yapı olarak tasarlanır.',
            safetyCheckDesc: 'Bu seçim, size en uygun acil durum protokolünü belirlememize yardımcı olacaktır.',
            continue: 'DEVAM ET',
            callEmergency: 'ACİL YARDIM ÇAĞIR',
        },
        home: {
            title: 'Nasıl yardımcı olabiliriz?',
            cards: {
                emergency: {
                    title: 'Acil Yardıma Bağlan',
                    desc: '112, Ohvriabi ve diğer acil hatlar',
                    action: 'Bağlan'
                },
                chat: {
                    title: 'Konuş',
                    desc: 'Hızlı sorular ve yönlendirme'
                },
                nearby: {
                    title: 'Barınma / sığınak',
                    desc: 'En yakın güvenli kurumlar ve sığınaklar',
                    action: 'Konum Bul'
                },
                rights: {
                    title: 'Hukuki ve sosyal haklar',
                    desc: 'Şiddet türleri, kanıt toplama, polis başvurusu',
                    action: 'Bilgi Edin'
                },
                safetyPlan: {
                    title: 'Şiddet görüyorum / risk var',
                    desc: 'Kriz anı kontrol listesi ve çıkış çantası',
                    action: 'Plan Oluştur'
                },
                digitalSecurity: {
                    title: 'Dijital güvenliğim tehlikede',
                    desc: 'Konum gizleme, takip yazılımı, güvenli iletişim',
                    action: 'Kontrol Et'
                },
                childConcern: {
                    title: 'Çocukla ilgili endişem var',
                    desc: '',
                    action: 'Destek Al'
                },
                translate: {
                    title: 'Çeviri',
                    desc: 'Acil çok dilli iletişim desteği'
                }
            }
        },
        emergency: {
            title112: 'Acil Yardım',
            title116006: 'Ohvriabi',
            title116111: 'Lasteabi',
            title: 'Acil Yardım',
            subtitle: 'Acil durumda aşağıdaki numaraları arayabilirsiniz',
            importantInfo: 'Önemli Bilgiler',
            desc112: 'Polis / Ambulans / İtfaiye - 7/24',
            desc116006: '7/24 Mağdur Destek Hattı (Est/Rus/Eng)',
            desc116111: '7/24 Çocuk Yardım Hattı',
            desc1247: 'Devlet Bilgi Hattı',
            info112: 'Tüm acil durumlar için (polis, ambulans, itfaiye)',
            info116006: 'Suç mağdurları için özel destek hattı. Estonca, Rusça ve İngilizce hizmet verir.',
            info116111: 'Çocuklar ve gençler için yardım hattı. Telefon ve online destek.',
            info1247: 'Devlet hizmetleri hakkında bilgi ve yönlendirme.'
        },
        aiChat: {
            badge: 'Unilink AI 1.0',
            speaking: 'Konuşuyor...',
            welcomeTitle: 'Nasıl yardımcı olabilirim?',
            welcomeText: 'Güvenlik planı, hukuki haklar veya sadece dertleşmek için buradayım.',
            suggestions: {
                safetyPlan: { title: "Güvenlik Planı", desc: "Adım adım güvenlik planı oluştur." },
                rights: { title: "Hukuki Haklar", desc: "Haklarını ve yasaları öğren." },
                talk: { title: "Konuşalım", desc: "Biraz dertleşmeye ne dersin?" },
                resources: { title: "Kaynaklar", desc: "Yakındaki sığınak ve merkezler." }
            },
            inputPlaceholder: 'Bir şeyler yazın...',
            disclaimer: 'Unilink AI v1.0 - Yanıtları kontrol etmenizi öneririz.',
            typing: 'Yazıyor...',
            error: 'Üzgünüm, şu an bağlantıda bir sorun var. Lütfen API anahtarınızı kontrol edin.',
            attachFile: 'Dosya ekle',
            voiceCommand: 'Sesli komut'
        }
    },
    et: {
        common: {
            appName: 'Unilink Navigator',
            subtitle: 'Turvaline Tugigrupp',
            quickExit: 'Kiire Väljumine',
            emergency: 'Hädaabi',
            menu: 'Menüü',
            back: 'Tagasi',
            yes: 'Jah',
            no: 'Ei',
            loading: 'Laadimine...',
            anonymous: 'Kasutamine on anonüümne. Kontot pole vaja. Kõik andmed kustutatakse seansi lõppedes.',
            anonymousTitle: 'Kasutamine on anonüümne',
            anonymousDesc: 'Kontot pole vaja. Kõik andmed kustutatakse seansi lõppedes.',
            safetyPlan: 'TURVAPLAAN',
            rights: 'ÕIGUSED',
            nearby: 'LÄHEDAL',
            security: 'TURVALISUS',
            getHelp: 'SAADA ABI',
            call: 'Helista',
            ariaCall: 'helista numbrile',
        },
        successStories: {
            title: 'EDULOOD',
            subtitle: 'Igal ühel on oma lugu. Siin on inspireerivad teekonnad eludest, mida Unilink on muutnud.',
            tellStory: 'JAGA OMA LUGU',
            allStories: 'KÕIK LOOD',
            stories: [
                { name: "Elif & Can", text: "Tänu Unilinkile jõudsime turvalisse varjupaika. Nüüd saame tulevikku vaadata hirmuta." },
                { name: "Mehmet", text: "Ma ei teadnud oma õigusi. Juhendite abil sain oma protsessi hallata ja elamisloa." },
                { name: "Ayşe", text: "Hädaabinupp päästis mu elu, kui tundsin end üksikuna. Tugimeeskond oli alati minuga." },
                { name: "Selin", text: "Digitaalsete turvameetmetega kaotasin oma jäljed. Nüüd elan uues linnas rahulikku elu." },
                { name: "Burak", text: "Mul oli raske elukohta leida. Platvormi suuniste abil leidsin koha, kus peatuda." }
            ]
        },
        landing: {
            heroTitle: 'Unilink Navigator',
            heroSubtitle: 'Turvaline Tugigrupp',
            heroDescription: 'Unilink Navigator on Eestis asuva Unilink Mitmekultuurilise Keskuse poolt juhitav anonüümne, mitmekeelne ja empaatial põhinev digitaalne juhendamis- ja suunamissüsteem naistele, emadele ja lastele. Süsteemi eesmärk on tagada abiotsijatele turvaline juurdepääs õigele teabele, õigustele ja kaitsevarudele.',
            safetyCheck: 'Kas sa oled praegu ohutus kohas?',
            yesContinue: 'Olen ohutus kohas',
            unsure: 'Ei ole kindel',
            noEmergency: 'Olen ohus',
            emergencyContacts: 'Hädaabinumbrid',
            contactUs: 'VÕTA MEIEGA ÜHENDUST',
            emergencyAi: 'HÄDAABI (AI)',
            coreFocusTitle: 'Unilink Navigatori keskne ja püsiv fookus:',
            coreFocus1: 'Naiste turvalisus',
            coreFocus2: 'Ema ja lapse turvalisus',
            coreFocus3: 'Võimestamine',
            coreFocus4: 'Privaatsus ja andmete turvalisus',
            coreFocus5: 'Kaitsev suunamine vägivalla, väärkohtlemise ja ohu korral',
            coreFocusDesc: 'Selle fookusega on süsteem loodud struktuurina, mis kuulab kasutajat hinnanguid andmata, rahustab, pakub valikuid ja suunab turvaliste ressursside juurde.',
            safetyCheckDesc: 'See valik aitab meil määrata teile sobivaima hädaabiprotokolli.',
            continue: 'JÄTKA',
            callEmergency: 'HELISTA HÄDAABISSE',
        },
        home: {
            title: 'Kuidas saame aidata?',
            cards: {
                emergency: {
                    title: 'Helista Hädaabisse',
                    desc: '112, Ohvriabi ja muud numbrid',
                    action: 'Ühenda'
                },
                chat: {
                    title: 'Räägi',
                    desc: 'Kiired küsimused ja suunamine'
                },
                nearby: {
                    title: 'Majutus / Varjupaik',
                    desc: 'Lähimad turvakeskused ja varjupaigad',
                    action: 'Leia asukoht'
                },
                rights: {
                    title: 'Õiguslikud ja sotsiaalsed õigused',
                    desc: 'Vägivalla liigid, tõendite kogumine',
                    action: 'Saa teavet'
                },
                safetyPlan: {
                    title: 'Kogen vägivalda / on risk',
                    desc: 'Kriisiolukorra kontrollnimekiri',
                    action: 'Loo plaan'
                },
                digitalSecurity: {
                    title: 'Minu digitaalne turvalisus on ohus',
                    desc: 'Asukoha peitmine, nuhkivara avastamine',
                    action: 'Kontrolli'
                },
                childConcern: {
                    title: 'Mul on mure lapse pärast',
                    desc: '',
                    action: 'Saa tuge'
                },
                translate: {
                    title: 'Tõlge',
                    desc: 'Mitmekeelne suhtlusabi'
                }
            }
        },
        emergency: {
            title112: 'Hädaabi',
            title116006: 'Ohvriabi',
            title116111: 'Lasteabi',
            title: 'Hädaabi',
            subtitle: 'Hädaolukorras helistage järgmistel numbritel',
            importantInfo: 'Oluline Teave',
            desc112: 'Politsei / Kiirabi / Pääste - 24/7',
            desc116006: '24/7 Ohvriabi Krisitelefon',
            desc116111: '24/7 Lasteabi',
            desc1247: 'Riigiinfo Telefon',
            info112: 'Kõik hädaolukorrad (politsei, kiirabi, pääste)',
            info116006: 'Spetsiaalne abiliin kuriteoohvritele.',
            info116111: 'Abiliin lastele ja noortele.',
            info1247: 'Riigiteenuste info ja suunamine.'
        },
        aiChat: {
            badge: 'Unilink AI 1.0',
            speaking: 'Räägib...',
            welcomeTitle: 'Kuidas saan aidata?',
            welcomeText: 'Olen siin turvaplaani, juriidiliste õiguste või lihtsalt vestluse jaoks.',
            suggestions: {
                safetyPlan: { title: "Turvaplaan", desc: "Loo samm-sammult turvaplaan." },
                rights: { title: "Õigused", desc: "Õpi oma õigusi ja seadusi." },
                talk: { title: "Räägime", desc: "Kuidas oleks väikese vestlusega?" },
                resources: { title: "Ressursid", desc: "Lähimad varjupaigad ja keskused." }
            },
            inputPlaceholder: 'Kirjuta midagi...',
            disclaimer: 'Unilink AI v1.0 - Palun kontrolli vastuseid.',
            typing: 'Kirjutab...',
            error: 'Vabandust, ühendusega on probleem. Palun kontrolli oma API võtit.',
            attachFile: 'Lisa fail',
            voiceCommand: 'Häälkäsklused'
        }
    },
    ru: {
        common: {
            appName: 'Unilink Navigator',
            subtitle: 'Платформа Безопасности',
            quickExit: 'Быстрый Выход',
            emergency: 'Экстренная Помощь',
            menu: 'Меню',
            back: 'Назад',
            yes: 'Да',
            no: 'Нет',
            loading: 'Загрузка...',
            anonymous: 'Анонимно. Аккаунт не нужен. Все данные удаляются после сеанса.',
            anonymousTitle: 'Анонимно',
            anonymousDesc: 'Аккаунт не нужен. Все данные удаляются после сеанса.',
            safetyPlan: 'ПЛАН БЕЗОПАСНОСТИ',
            rights: 'ПРАВА',
            nearby: 'РЯДОМ',
            security: 'БЕЗОПАСНОСТЬ',
            getHelp: 'ПОЛУЧИТЬ ПОМОЩЬ',
            call: 'Позвонить',
            ariaCall: 'позвонить на номер',
        },
        successStories: {
            title: 'ИСТОРИИ УСПЕХА',
            subtitle: 'У каждого есть история. Вот вдохновляющие пути жизней, измененных с Unilink.',
            tellStory: 'РАССКАЖИТЕ СВОЮ ИСТОРИЮ',
            allStories: 'ВСЕ ИСТОРИИ',
            stories: [
                { name: "Элиф и Джан", text: "Благодаря Unilink мы добрались до безопасного убежища. Теперь мы можем смотреть в будущее без страха." },
                { name: "Мехмет", text: "Я не знал своих прав. С помощью руководств я смог управлять процессом и получил вид на жительство." },
                { name: "Айше", text: "Кнопка экстренной помощи спасла мне жизнь, когда я чувствовала себя одинокой. Команда поддержки была всегда рядом." },
                { name: "Селин", text: "С помощью мер цифровой безопасности я скрыла свои следы. Теперь я живу мирной жизнью в новом городе." },
                { name: "Бурак", text: "Мне было трудно найти жилье. С помощью направлений на платформе я нашел место для проживания." }
            ]
        },
        landing: {
            heroTitle: 'Unilink Navigator',
            heroSubtitle: 'Платформа Безопасности',
            heroDescription: 'Unilink Navigator — это анонимная, многоязычная и основанная на эмпатии цифровая система руководства и направления для женщин, матерей и детей, управляемая мультикультурным центром Unilink в Эстонии. Система направлена на обеспечение безопасного доступа к правильной информации, правам и защитным ресурсам.',
            safetyCheck: 'Вы сейчас в безопасности?',
            yesContinue: 'Я в безопасности',
            unsure: 'Не уверен(а)',
            noEmergency: 'Я в опасности',
            emergencyContacts: 'Экстренные Номера',
            contactUs: 'СВЯЖИТЕСЬ С НАМИ',
            emergencyAi: 'ЭКСТРЕННАЯ ПОДДЕРЖКА (AI)',
            coreFocusTitle: 'Центральный и неизменный фокус Unilink Navigator:',
            coreFocus1: 'Безопасность женщин',
            coreFocus2: 'Безопасность матери и ребенка',
            coreFocus3: 'Расширение прав и возможностей',
            coreFocus4: 'Конфиденциальность и безопасность данных',
            coreFocus5: 'Защитное направление в случаях насилия, жестокого обращения и риска',
            coreFocusDesc: 'С этим фокусом система спроектирована как структура, которая слушает пользователя без осуждения, успокаивает, предлагает варианты и направляет к безопасным ресурсам.',
            safetyCheckDesc: 'Этот выбор поможет нам определить наиболее подходящий протокол экстренной помощи для вас.',
            continue: 'ПРОДОЛЖИТЬ',
            callEmergency: 'ВЫЗВАТЬ ПОМОЩЬ',
        },
        home: {
            title: 'Как мы можем помочь?',
            cards: {
                emergency: {
                    title: 'Экстренная Помощь',
                    desc: '112, Помощь жертвам и другие',
                    action: 'Связаться'
                },
                chat: {
                    title: 'Чат',
                    desc: 'Быстрые вопросы и поддержка'
                },
                nearby: {
                    title: 'Жилье / Убежище',
                    desc: 'Ближайшие центры и приюты',
                    action: 'Найти место'
                },
                rights: {
                    title: 'Юридические и социальные права',
                    desc: 'Виды насилия, сбор доказательств',
                    action: 'Узнать'
                },
                safetyPlan: {
                    title: 'Я подвергаюсь насилию / есть риск',
                    desc: 'Чек-лист для кризисных ситуаций',
                    action: 'Создать план'
                },
                digitalSecurity: {
                    title: 'Моя цифровая безопасность под угрозой',
                    desc: 'Скрытие локации, защита данных',
                    action: 'Проверить'
                },
                childConcern: {
                    title: 'Я беспокоюсь о ребенке',
                    desc: '',
                    action: 'Получить поддержку'
                },
                translate: {
                    title: 'Перевод',
                    desc: 'Мультиязычная поддержка'
                }
            }
        },
        emergency: {
            title112: 'Экстренная Помощь',
            title116006: 'Помощь Жертвам',
            title116111: 'Помощь Детям',
            title: 'Экстренная Помощь',
            subtitle: 'В экстренной ситуации звоните по этим номерам',
            importantInfo: 'Важная Информация',
            desc112: 'Полиция / Скорая / Спасатели - 24/7',
            desc116006: '24/7 Помощь Жертвам',
            desc116111: '24/7 Помощь Детям',
            desc1247: 'Государственная Инфолиния',
            info112: 'Все экстренные службы',
            info116006: 'Специальная линия для жертв преступлений.',
            info116111: 'Линия помощи детям и подросткам.',
            info1247: 'Информация о государственных услугах.'
        },
        aiChat: {
            badge: 'Unilink AI 1.0',
            speaking: 'Говорит...',
            welcomeTitle: 'Как я могу помочь?',
            welcomeText: 'Я здесь для плана безопасности, юридических прав или просто поговорить.',
            suggestions: {
                safetyPlan: { title: "План безопасности", desc: "Создайте пошаговый план безопасности." },
                rights: { title: "Права", desc: "Узнайте о своих правах и законах." },
                talk: { title: "Поговорим", desc: "Как насчет небольшого разговора?" },
                resources: { title: "Ресурсы", desc: "Ближайшие приюты и центры." }
            },
            inputPlaceholder: 'Напишите что-нибудь...',
            disclaimer: 'Unilink AI v1.0 - Пожалуйста, проверяйте ответы.',
            typing: 'Печатает...',
            error: 'Извините, проблема с соединением. Пожалуйста, проверьте API ключ.',
            attachFile: 'Прикрепить файл',
            voiceCommand: 'Голосовая команда'
        }
    },
    en: {
        common: {
            appName: 'Unilink Navigator',
            subtitle: 'Safety Support Platform',
            quickExit: 'Quick Exit',
            emergency: 'Emergency',
            menu: 'Menu',
            back: 'Back',
            yes: 'Yes',
            no: 'No',
            loading: 'Loading...',
            anonymous: 'Anonymous usage. No account needed. All data cleared after session.',
            anonymousTitle: 'Anonymous usage',
            anonymousDesc: 'No account needed. All data cleared after session.',
            safetyPlan: 'SAFETY PLAN',
            rights: 'RIGHTS',
            nearby: 'NEARBY',
            security: 'SECURITY',
            getHelp: 'GET HELP',
            call: 'Call',
            ariaCall: 'call number',
        },
        successStories: {
            title: 'SUCCESS STORIES',
            subtitle: 'Everyone has a story. Here are the inspiring journeys of lives changed with Unilink.',
            tellStory: 'TELL US YOUR STORY',
            allStories: 'ALL STORIES',
            stories: [
                { name: "Elif & Can", text: "Thanks to Unilink, we reached a safe shelter. Now we can look to the future without fear." },
                { name: "Mehmet", text: "I didn't know my legal rights. Thanks to the guides, I managed my process and got my residence permit." },
                { name: "Ayşe", text: "The emergency button saved my life when I felt alone. The support team was always with me." },
                { name: "Selin", text: "I covered my tracks with digital security measures. Now I have a peaceful life in a new city." },
                { name: "Burak", text: "I was struggling to find housing. With the referrals on the platform, I found a place to stay." }
            ]
        },
        landing: {
            heroTitle: 'Unilink Navigator',
            heroSubtitle: 'Safety Support Platform',
            heroDescription: 'Unilink Navigator is an anonymous, multilingual, and empathy-based digital guidance and referral system for women, mothers, and children, run by the Unilink Multicultural Centre in Estonia. The system aims to ensure safe access to the right information, rights, and protective resources for those seeking support.',
            safetyCheck: 'Are you safe right now?',
            yesContinue: 'I am safe',
            unsure: 'Not sure',
            noEmergency: 'I am in danger',
            emergencyContacts: 'Emergency Hotlines',
            contactUs: 'CONTACT US',
            emergencyAi: 'EMERGENCY SUPPORT (AI)',
            coreFocusTitle: 'Unilink Navigator’s central and unchanging focus:',
            coreFocus1: 'Women’s safety',
            coreFocus2: 'Mother and child safety',
            coreFocus3: 'Empowerment',
            coreFocus4: 'Privacy and data security',
            coreFocus5: 'Protective referral in cases of violence, abuse, and risk',
            coreFocusDesc: 'With this focus, the system is designed as a structure that listens to the user without judgment, calms, offers options, and directs to safe resources.',
            safetyCheckDesc: 'This choice will help us determine the most suitable emergency protocol for you.',
            continue: 'CONTINUE',
            callEmergency: 'CALL EMERGENCY',
        },
        home: {
            title: 'How can we help?',
            cards: {
                emergency: {
                    title: 'Connect to Emergency',
                    desc: '112, Victim Support and others',
                    action: 'Connect'
                },
                chat: {
                    title: 'Chat / Talk',
                    desc: 'Quick questions and guidance'
                },
                nearby: {
                    title: 'Housing / Shelter',
                    desc: 'Nearest safe centers and shelters',
                    action: 'Find Location'
                },
                rights: {
                    title: 'Legal and Social Rights',
                    desc: 'Types of violence, evidence, police',
                    action: 'Get Info'
                },
                safetyPlan: {
                    title: 'I am experiencing violence / at risk',
                    desc: 'Crisis checklist and exit bag',
                    action: 'Create Plan'
                },
                digitalSecurity: {
                    title: 'My digital security is at risk',
                    desc: 'Location hiding, spyware, secure comms',
                    action: 'Check'
                },
                childConcern: {
                    title: 'I am worried about a child',
                    desc: '',
                    action: 'Get Support'
                },
                translate: {
                    title: 'Translation',
                    desc: 'Emergency multilingual support'
                }
            }
        },
        emergency: {
            title112: 'Emergency Help',
            title116006: 'Victim Support',
            title116111: 'Child Help',
            title: 'Emergency Help',
            subtitle: 'Call these numbers in case of emergency',
            importantInfo: 'Important Information',
            desc112: 'Police / Ambulance / Fire - 24/7',
            desc116006: '24/7 Victim Support (Est/Rus/Eng)',
            desc116111: '24/7  Child Helpline',
            desc1247: 'State Info Line',
            info112: 'For all emergencies (police, ambulance, fire)',
            info116006: 'Special support line for victims of crime.',
            info116111: 'Helpline for children and youth.',
            info1247: 'Information about state services.'
        },
        aiChat: {
            badge: 'Unilink AI 1.0',
            speaking: 'Speaking...',
            welcomeTitle: 'How can I help?',
            welcomeText: 'I am here for safety planning, legal rights, or just to chat.',
            suggestions: {
                safetyPlan: { title: "Safety Plan", desc: "Create a step-by-step safety plan." },
                rights: { title: "Legal Rights", desc: "Learn about your rights and laws." },
                talk: { title: "Let's Talk", desc: "How about a little chat?" },
                resources: { title: "Resources", desc: "Nearest shelters and centers." }
            },
            inputPlaceholder: 'Type something...',
            disclaimer: 'Unilink AI v1.0 - Please verify responses.',
            typing: 'Typing...',
            error: 'Sorry, there is a connection issue. Please check your API key.',
            attachFile: 'Attach file',
            voiceCommand: 'Voice command'
        }
    },
    ua: {
        common: {
            appName: 'Unilink Navigator',
            subtitle: 'Платформа Безпеки',
            quickExit: 'Швидкий Вихід',
            emergency: 'Екстрена Допомога',
            menu: 'Меню',
            back: 'Назад',
            yes: 'Так',
            no: 'Ні',
            loading: 'Завантаження...',
            anonymous: 'Анонімно. Акаунт не потрібен. Всі дані видаляються після сесії.',
            anonymousTitle: 'Анонімно',
            anonymousDesc: 'Акаунт не потрібен. Всі дані видаляються після сесії.',
            safetyPlan: 'ПЛАН БЕЗПЕКИ',
            rights: 'ПРАВА',
            nearby: 'ПОРУЧ',
            security: 'БЕЗПЕКА',
            getHelp: 'ОТРИМАТИ ДОПОМОГУ',
            call: 'Дзвонити',
            ariaCall: 'дзвонити на номер',
        },
        successStories: {
            title: 'ІСТОРІЇ УСПІХУ',
            subtitle: 'У кожного є історія. Ось надихаючі шляхи життів, змінених з Unilink.',
            tellStory: 'РОЗКАЖІТЬ СВОЮ ІСТОРІЮ',
            allStories: 'ВСІ ІСТОРІЇ',
            stories: [
                { name: "Еліф і Джан", text: "Завдяки Unilink ми дісталися безпечного притулку. Тепер ми можемо дивитися в майбутнє без страху." },
                { name: "Мехмет", text: "Я не знав своїх прав. За допомогою посібників я зміг керувати процесом і отримав посвідку на проживання." },
                { name: "Айше", text: "Кнопка екстреної допомоги врятувала моє життя, коли я почувалася самотньою. Команда підтримки була завжди поруч." },
                { name: "Селін", text: "За допомогою заходів цифрової безпеки я приховала свої сліди. Тепер я живу мирним життям у новому місті." },
                { name: "Бурак", text: "Мені було важко знайти житло. За допомогою направлень на платформі я знайшов місце для проживання." }
            ]
        },
        landing: {
            heroTitle: 'Unilink Navigator',
            heroSubtitle: 'Платформа Безпеки',
            heroDescription: 'Unilink Navigator — це анонімна, багатомовна та цифрова система керівництва та направлення, що базується на емпатії, для жінок, матерів та дітей, керована Мультикультурним центром Unilink в Естонії. Система має на меті забезпечити безпечний доступ до правильної інформації, прав та захисних ресурсів.',
            safetyCheck: 'Ви зараз у безпеці?',
            yesContinue: 'Я в безпеці',
            unsure: 'Не впевнений(а)',
            noEmergency: 'Я в небезпеці',
            emergencyContacts: 'Екстрені Номери',
            contactUs: 'ЗВ\'ЯЖІТЬСЯ З НАМИ',
            emergencyAi: 'ЕКСТРЕНА ПІДТРИМКА (AI)',
            coreFocusTitle: 'Центральний і незмінний фокус Unilink Navigator:',
            coreFocus1: 'Безпека жінок',
            coreFocus2: 'Безпека матері та дитини',
            coreFocus3: 'Розширення прав і можливостей',
            coreFocus4: 'Конфіденційність та безпека даних',
            coreFocus5: 'Захисне направлення у випадках насильства, жорстокого поводження та ризику',
            coreFocusDesc: 'З цим фокусом система спроектована як структура, що слухає користувача без осуду, заспокоює, пропонує варіанти та направляє до безпечних ресурсів.',
            safetyCheckDesc: 'Цей вибір допоможе нам визначити найбільш відповідний протокол екстреної допомоги для вас.',
            continue: 'ПРОДОВЖИТИ',
            callEmergency: 'ВИКЛИКАТИ ДОПОМОГУ',
        },
        home: {
            title: 'Як ми можемо допомогти?',
            cards: {
                emergency: {
                    title: 'Екстрена Допомога',
                    desc: '112, Допомога жертвам та інші',
                    action: 'Зв\'язатися'
                },
                chat: {
                    title: 'Чат',
                    desc: 'Швидкі запитання та підтримка'
                },
                nearby: {
                    title: 'Житло / Притулок',
                    desc: 'Найближчі центри та притулки',
                    action: 'Знайти місце'
                },
                rights: {
                    title: 'Юридичні та соціальні права',
                    desc: 'Види насильства, збір доказів',
                    action: 'Дізнатися'
                },
                safetyPlan: {
                    title: 'Я зазнаю насильства / є ризик',
                    desc: 'Чек-ліст для кризових ситуацій',
                    action: 'Створити план'
                },
                digitalSecurity: {
                    title: 'Моя цифрова безпека під загрозою',
                    desc: 'Приховання локації, захист даних',
                    action: 'Перевірити'
                },
                childConcern: {
                    title: 'Я турбуюся про дитину',
                    desc: '',
                    action: 'Отримати підтримку'
                },
                translate: {
                    title: 'Переклад',
                    desc: 'Багатомовна підтримка'
                }
            }
        },
        emergency: {
            title112: 'Екстрена Допомога',
            title116006: 'Допомога Жертвам',
            title116111: 'Допомога Дітям',
            title: 'Екстрена Допомога',
            subtitle: 'В екстренній ситуації телефонуйте за цими номерами',
            importantInfo: 'Важлива Інформація',
            desc112: 'Поліція / Швидка / Рятувальники - 24/7',
            desc116006: '24/7 Допомога Жертвам',
            desc116111: '24/7 Допомога Дітям',
            desc1247: 'Державна Інфолінія',
            info112: 'Всі екстрені служби',
            info116006: 'Спеціальна лінія для жертв злочинів.',
            info116111: 'Лінія допомоги дітям та підліткам.',
            info1247: 'Інформація про державні послуги.'
        },
        aiChat: {
            badge: 'Unilink AI 1.0',
            speaking: 'Говорить...',
            welcomeTitle: 'Як я можу допомогти?',
            welcomeText: 'Я тут для плану безпеки, юридичних прав або просто поговорити.',
            suggestions: {
                safetyPlan: { title: "План безпеки", desc: "Створіть покроковий план безпеки." },
                rights: { title: "Права", desc: "Дізнайтеся про свої права та закони." },
                talk: { title: "Поговоримо", desc: "Як щодо невеликої розмови?" },
                resources: { title: "Ресурси", desc: "Найближчі притулки та центри." }
            },
            inputPlaceholder: 'Напишіть щось...',
            disclaimer: 'Unilink AI v1.0 - Будь ласка, перевіряйте відповіді.',
            typing: 'Друкує...',
            error: 'Вибачте, проблема зі з\'єднанням. Будь ласка, перевірте API ключ.',
            attachFile: 'Прикріпити файл',
            voiceCommand: 'Голосова команда'
        }
    },
    ar: {
        common: {
            appName: 'Unilink Navigator',
            subtitle: 'منصة دعم الأمان',
            quickExit: 'خروج سريع',
            emergency: 'طوارئ',
            menu: 'القائمة',
            back: 'رجوع',
            yes: 'نعم',
            no: 'لا',
            loading: 'جاري التحميل...',
            anonymous: 'استخدام مجهول. لا حاجة لحساب. يتم مسح جميع البيانات بعد الجلسة.',
            anonymousTitle: 'استخدام مجهول',
            anonymousDesc: 'لا حاجة لحساب. يتم مسح جميع البيانات بعد الجلسة.',
            safetyPlan: 'خطة الأمان',
            rights: 'الحقوق',
            nearby: 'بالقرب',
            security: 'الأمان',
            getHelp: 'الحصول على المساعدة',
            call: 'اتصل',
            ariaCall: 'اتصل بالرقم',
        },
        successStories: {
            title: 'قصص نجاح',
            subtitle: 'لكل شخص قصة. إليك رحلات ملهمة لحيوات تغيرت مع Unilink.',
            tellStory: 'شاركنا قصتك',
            allStories: 'كل القصص',
            stories: [
                { name: "إليف وجان", text: "بفضل Unilink، وصلنا إلى مأوى آمن. الآن يمكننا التطلع إلى المستقبل بلا خوف." },
                { name: "محمد", text: "لم أكن أعرف حقوقي القانونية. بفضل الأدلة، تمكنت من إدارة عمليتي وحصلت على تصريح الإقامة." },
                { name: "عائشة", text: "أنقذ زر الطوارئ حياتي عندما شعرت بالوحدة. كان فريق الدعم معي دائمًا." },
                { name: "سيلين", text: "قمت بتغطية آثاري بتدابير الأمان الرقمي. الآن أعيش حياة سلمية في مدينة جديدة." },
                { name: "بوراك", text: "كنت أكافح للعثور على سكن. بفضل الإحالات على المنصة، وجدت مكانًا للإقامة." }
            ]
        },
        landing: {
            heroTitle: 'Unilink Navigator',
            heroSubtitle: 'منصة دعم الأمان',
            heroDescription: 'Unilink Navigator هو نظام توجيه وإحالة رقمي مجهول ومتعدد اللغات وقائم على التعاطف للنساء والأمهات والأطفال ، يديره مركز Unilink متعدد الثقافات في إستونيا. يهدف النظام إلى ضمان الوصول الآمن إلى المعلومات الصحيحة والحقوق والموارد الوقائية لأولئك الذين يسعون للحصول على الدعم.',
            safetyCheck: 'هل أنت في أمان الآن؟',
            yesContinue: 'أنا في أمان',
            unsure: 'غير متأكد',
            noEmergency: 'أنا في خطر',
            emergencyContacts: 'أرقام الطوارئ',
            contactUs: 'اتصل بنا',
            emergencyAi: 'دعم الطوارئ (AI)',
            coreFocusTitle: 'التركيز المركزي والثابت لـ Unilink Navigator:',
            coreFocus1: 'سلامة المرأة',
            coreFocus2: 'سلامة الأم والطفل',
            coreFocus3: 'التمكين',
            coreFocus4: 'الخصوصية وأمن البيانات',
            coreFocus5: 'الإحالة الوقائية في حالات العنف وسوء المعاملة والمخاطر',
            coreFocusDesc: 'مع هذا التركيز ، تم تصميم النظام كهيكل يستمع إلى المستخدم دون حكم ، ويهدئ ، ويقدم خيارات ، ويوجه إلى موارد آمنة.',
            safetyCheckDesc: 'سيساعدنا هذا الخيار في تحديد بروتوكول الطوارئ الأنسب لك.',
            continue: 'تابع',
            callEmergency: 'اتصل بالطوارئ',
        },
        home: {
            title: 'كيف يمكننا المساعدة؟',
            cards: {
                emergency: {
                    title: 'الاتصال بالطوارئ',
                    desc: '112، دعم الضحايا وأرقام أخرى',
                    action: 'اتصال'
                },
                chat: {
                    title: 'تحدث / دردشة',
                    desc: 'أسئلة سريعة وتوجيه'
                },
                nearby: {
                    title: 'سكن / مأوى',
                    desc: 'أقرب المراكز الآمنة والملاجئ',
                    action: 'اعثر على الموقع'
                },
                rights: {
                    title: 'الحقوق القانونية والاجتماعية',
                    desc: 'أنواع العنف، جمع الأدلة، الشرطة',
                    action: 'احصل على المعلومات'
                },
                safetyPlan: {
                    title: 'أنا أتعرض للعنف / في خطر',
                    desc: 'قائمة التحقق للأزمات وحقيبة الطوارئ',
                    action: 'إنشاء خطة'
                },
                digitalSecurity: {
                    title: 'أماني الرقمي في خطر',
                    desc: 'إخفاء الموقع، برامج التجسس، اتصالات آمنة',
                    action: 'تحقق'
                },
                childConcern: {
                    title: 'أنا قلق بشأن طفل',
                    desc: '',
                    action: 'احصل على الدعم'
                },
                translate: {
                    title: 'ترجمة',
                    desc: 'دعم متعدد اللغات للطوارئ'
                }
            }
        },
        emergency: {
            title112: 'مساعدة الطوارئ',
            title116006: 'دعم الضحايا',
            title116111: 'خط مساعدة الطفل',
            title: 'مساعدة الطوارئ',
            subtitle: 'اتصل بهذه الأرقام في حالة الطوارئ',
            importantInfo: 'معلومات هامة',
            desc112: 'الشرطة / الإسعاف / الإطفاء - 24/7',
            desc116006: '24/7 خط دعم الضحايا',
            desc116111: '24/7 خط مساعدة الطفل',
            desc1247: 'خط معلومات الدولة',
            info112: 'لجميع حالات الطوارئ (شرطة، إسعاف، إطفاء)',
            info116006: 'خط دعم خاص لضحايا الجرائم. (إنجليزي/إستوني/روسي)',
            info116111: 'خط مساعدة للأطفال والشباب.',
            info1247: 'معلومات حول الخدمات الحكومية.'
        },
        aiChat: {
            badge: 'Unilink AI 1.0',
            speaking: 'يتحدث...',
            welcomeTitle: 'كيف يمكنني المساعدة؟',
            welcomeText: 'أنا هنا من أجل خطة الأمان، الحقوق القانونية، أو مجرد الدردشة.',
            suggestions: {
                safetyPlan: { title: "خطة الأمان", desc: "إنشاء خطة أمان خطوة بخطوة." },
                rights: { title: "الحقوق القانونية", desc: "تعرف على حقوقك والقوانين." },
                talk: { title: "لنتحدث", desc: "ماذا عن دردشة قصيرة؟" },
                resources: { title: "الموارد", desc: "أقرب الملاجئ والمراكز." }
            },
            inputPlaceholder: 'اكتب شيئًا...',
            disclaimer: 'Unilink AI v1.0 - يرجى التحقق من الردود.',
            typing: 'يكتب...',
            error: 'عذراً، هناك مشكلة في الاتصال. يرجى التحقق من مفتاح API.',
            attachFile: 'إرفاق ملف',
            voiceCommand: 'أمر صوتي'
        }
    }
};
