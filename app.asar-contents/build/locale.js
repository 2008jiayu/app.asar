! function(e) {
    function t(a) {
        if (n[a]) return n[a].exports;
        var i = n[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "./build/", t(0)
}({
    0: function(e, t, n) {
        global_locale = n(1235)
    },
    1235: function(e, t) {
        e.exports = {
            dashboard: {
                "zh-cn": "概览",
                en: "Dashboard",
                jp: "ダッシュボード",
                it: "Dashboard",
                de: "Cockpit",
                es: "Tablero",
                fr: "Tableau de bord",
                nl: "Dashboard",
                pt: "Painel de instrumentos",
                ru: "Приборная панель"
            },
            basicsetup: {
                description: "//Basic Settings",
                "zh-cn": "基本设置",
                en: "Basic Settings",
                jp: "基本設定",
                it: "Impostazioni di base",
                de: "Grundeinstellungen",
                es: "Ajustes básicos",
                fr: "Paramètres de base",
                nl: "Basisinstellingen",
                pt: "Definições básicas",
                ru: "Основные настройки"
            },
            fcsetup: {
                description: "//Flight Settings",
                "zh-cn": "飞行设置",
                en: "Flight Settings",
                jp: "フライト設定",
                it: "Impostazioni di volo",
                de: "Flugeinstellungen",
                es: "Ajustes de vuelo",
                fr: "Paramètres de vol",
                nl: "Vluchtinstellingen",
                pt: "Definições de voo",
                ru: "Летные настройки"
            },
            tools: {
                "zh-cn": "工具",
                en: "Tools",
                jp: "工具",
                it: "Strumenti",
                de: "Instrumente",
                es: "Herramientas",
                fr: "Outils",
                nl: "Hulpmiddelen",
                pt: "Ferramentas",
                ru: "Инструменты"
            },
            djidevices: {
                description: "//DJI Device",
                "zh-cn": "DJI 设备",
                en: "DJI Device",
                jp: "DJI機器",
                it: "Dispositivo DJI",
                de: "DJI-Gerät",
                es: "Dispositivo DJI",
                fr: "Appareil DJI",
                nl: "DJI-apparaat",
                pt: "Dispositivo DJI",
                ru: "Устройство DJI"
            },
            Mode: {
                "zh-cn": "模式",
                en: "Mode",
                jp: "モード",
                it: "Modalità",
                de: "Modus",
                es: "Modo",
                fr: "Atti.",
                nl: "Modus",
                pt: "Modo",
                ru: "Режим"
            },
            Status: {
                "zh-cn": "状态",
                en: "Status",
                jp: "状態",
                it: "Stato",
                de: "Status",
                es: "Estado",
                fr: "Statut",
                nl: "Status",
                pt: "Estado",
                ru: "Состояние"
            },
            Output: {
                "zh-cn": "输出",
                en: "Output",
                jp: "出力",
                it: "Uscita",
                de: "Ausgang",
                es: "Salida",
                fr: "Sortie",
                nl: "Uitvoer",
                pt: "Saída",
                ru: "Выход"
            },
            Input: {
                "zh-cn": "输入",
                en: "Input",
                jp: "入力",
                it: "Ingresso",
                de: "Eingang",
                es: "Entrada",
                fr: "Entrée",
                nl: "Invoer",
                pt: "Entrada",
                ru: "Вход"
            },
            Normal: {
                "zh-cn": "正常",
                en: "Normal",
                jp: "正常",
                it: "Normale",
                de: "Normal",
                es: "Normal",
                fr: "Normal",
                nl: "Normaal",
                pt: "Normal",
                ru: "Нормальное состояние"
            },
            accLogin: {
                "zh-cn": "用户登录",
                en: "Login",
                jp: "ログイン",
                it: "Login",
                de: "Anmelden",
                es: "Iniciar sesión",
                fr: "Connexion",
                nl: "Aanmelden",
                pt: "Iniciar sessão",
                ru: "Вход в систему"
            },
            Logout: {
                "zh-cn": "登出",
                en: "Logout",
                jp: "ログアウト",
                it: "Logout",
                de: "Abmelden",
                es: "Cerrar sesión",
                fr: "Déconnexion",
                nl: "Afmelden",
                pt: "Terminar sessão",
                ru: "Выход из системы"
            },
            Device: {
                "zh-cn": "设备",
                en: "Device",
                jp: "デバイス",
                it: "Dispositivo",
                de: "Gerät",
                es: "Dispositivo",
                fr: "Appareil",
                nl: "Apparaat",
                pt: "Dispositivo",
                ru: "Устройство"
            },
            Devices: {
                "zh-cn": "设备",
                en: "Device",
                jp: "デバイス",
                it: "Dispositivo",
                de: "Gerät",
                es: "Dispositivo",
                fr: "Appareil",
                nl: "Apparaat",
                pt: "Dispositivo",
                ru: "Устройство"
            },
            SyncingData: {
                "zh-cn": "同步数据 ...",
                en: "Syncing Data ...",
                jp: "データの同期中です・・・",
                it: "Sincronizzazione dati in corso ...",
                de: "Daten werden synchronisiert...",
                es: "Sincronizando datos ...",
                fr: "Synchronisation des données...",
                nl: "Gegevens synchroniseren...",
                pt: "A sincronizar dados...",
                ru: "Синхронизация данных ..."
            },
            ReadingData: {
                "zh-cn": "读取数据 ...",
                en: "Reading Data ...",
                jp: "データにアクセス中です・・・",
                it: "Lettura dati in corso ...",
                de: "Daten werden gelesen...",
                es: "Leyendo datos ...",
                fr: "Lecture des données...",
                nl: "Gegevens lezen...",
                pt: "A ler dados...",
                ru: "Чтение данных ..."
            },
            modulestatus: {
                "zh-cn": "模块状态",
                en: "Module Status",
                jp: "モデュ―ルステータス",
                it: "Stato modulo",
                de: "Modulstatus",
                es: "Estado del módulo",
                fr: "État du module",
                nl: "Modulestatus",
                pt: "Estado do módulo",
                ru: "Состояние модуля"
            },
            IMU: {
                "zh-cn": "IMU",
                en: "IMU",
                jp: "IMU",
                it: "IMU",
                de: "IMU",
                es: "IMU",
                fr: "Centrale à inertie",
                nl: "IMU",
                pt: "IMU",
                ru: "IMU"
            },
            Compass: {
                "zh-cn": "指南针",
                en: "Compass",
                jp: "コンパス",
                it: "Bussola",
                de: "Kompass",
                es: "Brújula",
                fr: "Compas",
                nl: "Kompas",
                pt: "Bússola",
                ru: "Компас"
            },
            djibat: {
                "zh-cn": "DJI智能飞行电池",
                en: "DJI Intelligent Flight Battery",
                jp: "DJIインテリジェントフライトバッテリー",
                it: "Batteria di volo intelligente DJI",
                de: "DJI Intelligent Flight Battery",
                es: "Batería de vuelo inteligente DJI",
                fr: "Intelligent Flight Battery DJI",
                nl: "DJI Intelligent Flight Battery",
                pt: "Bateria de voo inteligente DJI",
                ru: "Аккумуляторная батарея DJI Intellectual Flight"
            },
            rawbat: {
                "zh-cn": "非DJI电池",
                en: "Non-DJI Battery",
                jp: "純正でないバッテリー",
                it: "Batteria non DJI",
                de: "Fremd-Akku",
                es: "Batería de otras marcas",
                fr: "Batterie non-DJI",
                nl: "Niet-DJI-accu",
                pt: "Bateria não-DJI",
                ru: "Аккумуляторная батарея стороннего производителя"
            },
            BatteryNoSet: {
                description: "//Battery Not Set",
                "zh-cn": "电池未设置",
                en: "Battery Settings Incomplete",
                jp: "バッテリー設定が正しくありません。",
                it: "Impostazioni batteria incomplete",
                de: "Akku-Einstellungen unvollständig",
                es: "Ajustes de batería incompletos",
                fr: "Paramètres de batterie incomplets",
                nl: "Accu-instellingen onvolledig",
                pt: "Definições da bateria incompletas",
                ru: "Настройки аккумуляторной батареи не завершены"
            },
            SDCard: {
                "zh-cn": "SD卡",
                en: "SD Card",
                jp: "SDカード",
                it: "Scheda SD",
                de: "SD-Karte",
                es: "Tarjeta SD",
                fr: "Carte SD",
                nl: "SD-kaart",
                pt: "Cartão SD",
                ru: "Карта SD"
            },
            FlyLimited: {
                description: "//Flight Restriction",
                "zh-cn": "飞行限制",
                en: "Flight Restriction",
                jp: "飛行制限",
                it: "Limitazioni di volo",
                de: "Fluggrenze",
                es: "Limitación de vuelo",
                fr: "Restriction de vol",
                nl: "Vluchtbeperking",
                pt: "Restrição de voo",
                ru: "Полетные ограничения"
            },
            Gain: {
                "zh-cn": "感度",
                en: "Gain",
                jp: "ゲイン",
                it: "Guadagno",
                de: "Verstärkung",
                es: "Ganancia",
                fr: "Gain",
                nl: "Toename",
                pt: "Ganho",
                ru: "Чувствительность"
            },
            AttGain: {
                "zh-cn": "姿态感度",
                en: "Attitude Gain",
                jp: "ATTIゲイン",
                it: "Attitude Gain",
                de: "Fluglage-Verst.",
                es: "Ganancia de actitud",
                fr: "Gain d'altitude",
                nl: "Hoogtetoename",
                pt: "Ganho de atitude",
                ru: "Чувствительность регулировки пространственного положения"
            },
            Horiz: {
                "zh-cn": "水平",
                en: "Horizontal",
                jp: "水平",
                it: "Orizzontale",
                de: "Horizontal",
                es: "Horizontal",
                fr: "Horizontal",
                nl: "Horizontaal",
                pt: "Horizontal",
                ru: "По горизонтали"
            },
            Range: {
                "zh-cn": "范围",
                en: "Range",
                jp: "範囲",
                it: "Intervallo",
                de: "Bereich",
                es: "Rango",
                fr: "Plage",
                nl: "Bereik",
                pt: "Alcance",
                ru: "Диапазон"
            },
            Vert: {
                "zh-cn": "水平",
                en: "Vertical",
                jp: "垂直",
                it: "Verticale",
                de: "Vertikal",
                es: "Vertical",
                fr: "Vertical",
                nl: "Verticaal",
                pt: "Vertical",
                ru: "По вертикали"
            },
            VertUp: {
                "zh-cn": "水平向上",
                en: "Vertical Up",
                jp: "垂直上昇",
                it: "Verticale in alto",
                de: "Vertikal hoch",
                es: "Vertical arriba",
                fr: "Vertical (haut)",
                nl: "Verticaal omhoog",
                pt: "Vertical para cima",
                ru: "Вертикально вверх"
            },
            SensitiveGain: {
                "zh-cn": "灵敏感度",
                en: "Sensitivity Gain",
                jp: "感応ゲイン",
                it: "Sensitivity Gain",
                de: "Empfindl.-Verst.",
                es: "Ganancia de sensibilidad",
                fr: "Gain de sensibilité",
                nl: "Gevoeligheidstoename",
                pt: "Ganho de sensibilidade",
                ru: "Настройка чувствительности"
            },
            Brake: {
                "zh-cn": "刹车",
                en: "Brake",
                jp: "ブレーキ",
                it: "Freno",
                de: "Bremse",
                es: "Freno",
                fr: "Frein",
                nl: "Remmen",
                pt: "Travão",
                ru: "Тормоз"
            },
            Tilt: {
                "zh-cn": "俯仰",
                en: "Tilt",
                jp: "チルト",
                it: "Inclinazione",
                de: "Neigung",
                es: "Inclinación",
                fr: "Inclinaison",
                nl: "Kantelen",
                pt: "Inclinação",
                ru: "Наклон"
            },
            BasicGain: {
                "zh-cn": "基础感度",
                en: "Basic Gain",
                jp: "基本ゲイン",
                it: "Basic Gain",
                de: "Grundverstärkung",
                es: "Ganancia básica",
                fr: "Gain de base",
                nl: "Standaardtoename",
                pt: "Ganho básico",
                ru: "Базовое значение чувствительности"
            },
            Pitch: {
                "zh-cn": "俯仰",
                en: "Pitch",
                jp: "ピッチ",
                it: "Beccheggio",
                de: "Nicken",
                es: "Cabeceo",
                fr: "Angle vertical",
                nl: "Hellen",
                pt: "Passo",
                ru: "Тангаж"
            },
            Roll: {
                "zh-cn": "横滚",
                en: "Roll",
                jp: "ロール",
                it: "Rollio",
                de: "Rollen",
                es: "Alabeo",
                fr: "Roulis",
                nl: "Rollen",
                pt: "Rotação",
                ru: "Крен"
            },
            Yaw: {
                "zh-cn": "航向",
                en: "Yaw",
                jp: "ヨー",
                it: "Imbardata",
                de: "Gieren",
                es: "Guiñada",
                fr: "Lacet",
                nl: "Gieren",
                pt: "Guinada",
                ru: "Рыскание"
            },
            Pan: {
                "zh-cn": "平移",
                en: "Pan",
                jp: "パン",
                it: "Rotazione orizzontale (pan)",
                de: "Horizontaler Schwenk",
                es: "Giro",
                fr: "Angle horizontal",
                nl: "Pannen",
                pt: "Oscilação",
                ru: "Поворот"
            },
            Thru: {
                "zh-cn": "油门",
                en: "Throttle",
                jp: "スロットル",
                it: "Acceleratore",
                de: "Gas",
                es: "Acelerador",
                fr: "Manette des gaz",
                nl: "Gashendel",
                pt: "Acelerador",
                ru: "Тяга"
            },
            CraftInfo: {
                "zh-cn": "飞行器信息",
                en: "Aircraft Information",
                jp: "機体情報",
                it: "Informazioni sul velivolo",
                de: "Drohnen-Info",
                es: "Información de aeronave",
                fr: "Informations sur l'appareil",
                nl: "Gegevens luchtvaartuig",
                pt: "Informações da aeronave",
                ru: "Информация о летательном аппарате"
            },
            ESCType: {
                "zh-cn": "类型",
                en: "Type",
                jp: "種類",
                it: "Type",
                de: "Type",
                es: "Type",
                fr: "Type",
                nl: "Type",
                pt: "Type",
                ru: "Type"
            },
            DJIESC: {
                "zh-cn": "DJI 智能电调",
                en: "DJI Intelligent ESC",
                jp: "DJI ESC",
                it: "ESC DJI",
                de: "DJI-ESC",
                es: "ESC de DJI",
                fr: "ESC DJI",
                nl: "DJI ESC",
                pt: "DJI ESC",
                ru: "DJI ESC"
            },
            OtherESC: {
                "zh-cn": "其他电调",
                en: "Other ESC",
                jp: "その他 ESC",
                it: "Altro ESC",
                de: "Anderer ESC",
                es: "Otro ESC",
                fr: "Autre ESC",
                nl: "Overige ESC",
                pt: "Outros ESC",
                ru: "Другие ESC"
            },
            Gear: {
                "zh-cn": "起落架",
                en: "Landing Gear",
                jp: "ギア",
                it: "Carrello di atterraggio",
                de: "Landegestell",
                es: "Tren de aterrizaje",
                fr: "Train d'atterrissage",
                nl: "Landingsgestel",
                pt: "Trem de aterragem",
                ru: "Шасси"
            },
            up: {
                "zh-cn": "收起",
                en: "Up",
                jp: "上",
                it: "In alto",
                de: "Hoch",
                es: "Arriba",
                fr: "Haut",
                nl: "Omhoog",
                pt: "Para cima",
                ru: "Вверх"
            },
            down: {
                "zh-cn": "放下",
                en: "Down",
                jp: "下",
                it: "In basso",
                de: "Herunter",
                es: "Abajo",
                fr: "Bas",
                nl: "Omlaag",
                pt: "Para baixo",
                ru: "Вниз"
            },
            RCType: {
                "zh-cn": "类型",
                en: "Type",
                jp: "RCタイプ",
                it: "Tipo di dispositivo di controllo remoto",
                de: "Fernbedienungstyp",
                es: "Tipo de control remoto",
                fr: "Type de radiocommande",
                nl: "Type afstandsbediening",
                pt: "Tipo de telecomando",
                ru: "Тип пульта дистанционного управления"
            },
            VPS: {
                "zh-cn": "VPS",
                en: "VPS",
                jp: "VPS",
                it: "VPS",
                de: "VPS",
                es: "VPS",
                fr: "VPS",
                nl: "VPS",
                pt: "Sist. posicionamento visual",
                ru: "VPS"
            },
            AircraftType: {
                "zh-cn": "机架类型",
                en: "Airframe Type",
                jp: "機体タイプ",
                it: "Tipo di velivolo",
                de: "Flugrahmentyp",
                es: "Tipo de estructura de aeronave",
                fr: "Type de cellule",
                nl: "Cascotype",
                pt: "Tipo de célula",
                ru: "Тип корпуса летательного аппарата"
            },
            ControlEXP: {
                "zh-cn": "控制EXP曲线",
                en: "Control EXP Curve",
                jp: "操作経験値（EXP）",
                it: "Controllo curva EXP",
                de: "EXP-Kurve steuern",
                es: "Curva de control EXP",
                fr: "Contrôler la courbe EXP",
                nl: "Bediening EXP-curve",
                pt: "Curva de controlo EXP",
                ru: "Кривая управления EXP"
            },
            ELE: {
                "zh-cn": "俯仰/横滚",
                en: "PITCH/ROLL",
                jp: "ピッチ／ロール",
                it: "BECCHEGGIO/ROLLIO",
                de: "NICKEN/ROLLEN",
                es: "CABECEO/ALABEO",
                fr: "INCLINAISON/ROULIS",
                nl: "HELLEN/ROLLEN",
                pt: "PASSO/ROTAÇÃO",
                ru: "PITCH/ROLL"
            },
            THRO: {
                "zh-cn": "油门",
                en: "THRO",
                jp: "THRO",
                it: "THRO",
                de: "THRO",
                es: "THRO",
                fr: "THRO",
                nl: "THRO",
                pt: "THRO",
                ru: "THRO"
            },
            YAW: {
                "zh-cn": "航向",
                en: "YAW",
                jp: "ヨー",
                it: "IMBARDATA",
                de: "GIEREN",
                es: "GUIÑADA",
                fr: "LACET",
                nl: "GIEREN",
                pt: "YAW",
                ru: "YAW"
            },
            Safety: {
                "zh-cn": "安全",
                en: "Safety",
                jp: "安全",
                it: "Sicurezza",
                de: "Sicherheit",
                es: "Seguridad",
                fr: "Sécurité",
                nl: "Veiligheid",
                pt: "Segurança",
                ru: "Безопасность"
            },
            GoHome: {
                "zh-cn": "返航",
                en: "Return Home",
                jp: "帰還（ゴーホーム）",
                it: "Return to Home",
                de: "Rückkehrfunktion",
                es: "Regreso al punto de origen",
                fr: "Retourner au point de départ",
                nl: "Return to Home",
                pt: "Voltar à posição inicial",
                ru: "Возврат домой"
            },
            enableCLHL: {
                "zh-cn": "激活: 航线+返航点锁定",
                en: "Enable: CL+HL",
                jp: "有効にする: CL+HL",
                it: "Consenti: CL+HL",
                de: "Aktivieren: CL+HL",
                es: "Activar: CL+HL",
                fr: "Activer : CL + HL",
                nl: "Inschakelen: CL+HL",
                pt: "Ativar: CL+HL",
                ru: "Включить: CL+HL"
            },
            Height: {
                "zh-cn": "高度",
                en: "Height",
                jp: "高度",
                it: "Altezza",
                de: "Höhe",
                es: "Altura",
                fr: "Hauteur",
                nl: "Hoogte",
                pt: "Altura",
                ru: "Высота"
            },
            Distance: {
                "zh-cn": "距离",
                en: "Distance",
                jp: "距離",
                it: "Distanza",
                de: "Strecke",
                es: "Distancia",
                fr: "Distance",
                nl: "Afstand",
                pt: "Distância",
                ru: "Расстояние"
            },
            Lowlimit: {
                "zh-cn": "最低",
                en: "Low Limit",
                jp: "低",
                it: "Limite basso",
                de: "Untergrenze",
                es: "Límite bajo",
                fr: "Limite inférieure",
                nl: "Ondergrens",
                pt: "Limite inferior",
                ru: "Нижний предел"
            },
            Battery: {
                "zh-cn": "电池",
                en: "Battery",
                jp: "バッテリー",
                it: "Batteria",
                de: "Akku",
                es: "Batería",
                fr: "Batterie",
                nl: "Accu",
                pt: "Bateria",
                ru: "Аккумуляторная батарея"
            },
            None: {
                "zh-cn": "无",
                en: "None",
                jp: "なし",
                it: "Nessuno",
                de: "---",
                es: "Ninguno",
                fr: "Aucune",
                nl: "Geen",
                pt: "Nenhum",
                ru: "Нет"
            },
            Warning: {
                "zh-cn": "警告",
                en: "Warning",
                jp: "警告",
                it: "Avvertenza",
                de: "Warnung",
                es: "Advertencia",
                fr: "Avertissement",
                nl: "Waarschuwing",
                pt: "Aviso",
                ru: "Осторожно"
            },
            Landing: {
                "zh-cn": "降落",
                en: "Landing",
                jp: "着陸",
                it: "Carrello di atterraggio",
                de: "Lande-",
                es: "Tren de aterrizaje",
                fr: "Train",
                nl: "Landing",
                pt: "Aterragem",
                ru: "Посадка"
            },
            mV: {
                "zh-cn": "mV",
                en: "mV",
                jp: "mV",
                it: "mV",
                de: "mV",
                es: "mV",
                fr: "mV",
                nl: "mV",
                pt: "mV",
                ru: "мВ"
            },
            V: {
                "zh-cn": "V",
                en: "V",
                jp: "V",
                it: "V",
                de: "V",
                es: "V",
                fr: "V",
                nl: "V",
                pt: "V",
                ru: "В"
            },
            Tips: {
                "zh-cn": "帮助",
                en: "Tips",
                jp: "ヒント",
                it: "Suggerimenti",
                de: "Tipps",
                es: "Consejos",
                fr: "Conseils",
                nl: "Tips",
                pt: "Sugestões",
                ru: "Советы"
            },
            reset: {
                "zh-cn": "恢复默认",
                en: "Reset",
                jp: "初期設定",
                it: "Reset",
                de: "Zurücksetzen",
                es: "Reset",
                fr: "Réinitialiser",
                nl: "Resetten",
                pt: "Reiniciar",
                ru: "Сброс"
            },
            Default: {
                "zh-cn": "默认",
                en: "Default",
                jp: "初期設定",
                it: "Predefinito",
                de: "Standard",
                es: "Por defecto",
                fr: "Par défaut",
                nl: "Standaard",
                pt: "Predefinição",
                ru: "Значение по умолчанию"
            },
            Level1: {
                "zh-cn": "低电量报警",
                en: "Low Battery Warning",
                jp: "ローバッテリー警告",
                it: "Avvertenza di livello basso di carica della batteria",
                de: "Warnung! Akkuladezustand niedrig",
                es: "Advertencia de batería baja",
                fr: "Avertissement de batterie faible",
                nl: "Waarschuwing lage accucapaciteit",
                pt: "Aviso de bateria fraca",
                ru: "Сигнал низкого уровня заряда батареи"
            },
            Level2: {
                "zh-cn": "严重低电量报警",
                en: "Critical Low Battery Warning",
                jp: "致命的なローバッテリー警告",
                it: "Avvertenza di Batteria quasi scarica",
                de: "Warnung! Akkuladezustand sehr niedrig",
                es: "Advertencia de batería baja crítica",
                fr: "Avertissement de niveau de batterie critique",
                nl: "Waarschuwing extreem lage accucapaciteit",
                pt: "Aviso de bateria extremamente baixa",
                ru: "Сигнал критически низкого уровня заряда батареи"
            },
            Aircraft: {
                "zh-cn": "机架",
                en: "Airframe",
                jp: "機体",
                it: "Telaio velivolo",
                de: "Flugrahmen",
                es: "Estructura de aeronave",
                fr: "Cellule",
                nl: "Casco",
                pt: "Célula",
                ru: "Летательный аппарат"
            },
            Mounting: {
                "zh-cn": "安装",
                en: "Mounting",
                jp: "取付け",
                it: "Montaggio",
                de: "Befestigung",
                es: "Montaje",
                fr: "Montage",
                nl: "Montage",
                pt: "Suporte",
                ru: "Крепление"
            },
            RC: {
                "zh-cn": "遥控器",
                en: "Remote Controller",
                jp: "送信機",
                it: "Radiocomando",
                de: "Fernbedienung",
                es: "Control remoto",
                fr: "Radiocommande",
                nl: "Afstandsbediening",
                pt: "Telecomando",
                ru: "Пульт дистанционного управления"
            },
            ESCSetting: {
                "zh-cn": "ESC设置",
                en: "ESC Settings",
                jp: "ESC設定",
                it: "Impostazioni ESC",
                de: "ESC-Einstellungen",
                es: "Ajustes de ESC",
                fr: "Paramètres de l'ESC",
                nl: "ESC-instellingen",
                pt: "Definições do ESC",
                ru: "Настройки ESC"
            },
            NextStep: {
                "zh-cn": "下一步",
                en: "Next",
                jp: "次へ",
                it: "Successivo",
                de: "Weiter",
                es: "Siguiente",
                fr: "Suivante",
                nl: "Volgende",
                pt: "Seguinte",
                ru: "Далее"
            },
            ChangeAircraftType: {
                "zh-cn": "选择机架类型",
                en: "Select Airframe Type",
                jp: "機体を選択します。",
                it: "Selezionare tipo di velivolo",
                de: "Flugrahmentyp wählen",
                es: "Seleccione tipo de estructura de aeronave",
                fr: "Sélectionner le type de cellule",
                nl: "Cascotype selecteren",
                pt: "Selecionar tipo de célula",
                ru: "Выбрать тип летательного аппарата"
            },
            Confirm: {
                "zh-cn": "确认",
                en: "Confirm",
                jp: "確定します。",
                it: "Conferma",
                de: "Bestätigen",
                es: "Confirmar",
                fr: "Confirmer",
                nl: "Bevestigen",
                pt: "Confirmar",
                ru: "Подтвердить"
            },
            Cancel: {
                "zh-cn": "取消",
                en: "Cancel",
                jp: "取消します。",
                it: "Annulla",
                de: "Abbrechen",
                es: "Cancelar",
                fr: "Annuler",
                nl: "Annuleren",
                pt: "Cancelar",
                ru: "Отмена"
            },
            ChooseMountingType: {
                "zh-cn": "飞控类型",
                en: "Flight Controller Type"
            },
            NormalFlight: {
                "zh-cn": "操控EXP",
                en: "Control EXP",
                jp: "基本操作",
                it: "Controllo Exp.",
                de: "Exp. steuern",
                es: "Control Exp.",
                fr: "Contrôler l'Exp.",
                nl: "Bediening exp.",
                pt: "Controlo exp.",
                ru: "Кривая управления exp."
            },
            ChooseESCType: {
                "zh-cn": "选择ESC类型",
                en: "Choose ESC Type",
                jp: "ESCタイプを選択します。",
                it: "Scegliere tipo ESC",
                de: "ESC-Typ wählen",
                es: "Seleccione tipo de ESC",
                fr: "Sélectionner le type d'ESC",
                nl: "ESC-type kiezen",
                pt: "Selecionar tipo de ESC",
                ru: "Выбрать тип ESC"
            },
            Motoridle: {
                "zh-cn": "电机怠速",
                en: "Motor Idling",
                jp: "モーターのアイドリング中です。",
                it: "Motore al minimo",
                de: "Motor im Leerlauf",
                es: "Ralentí del motor",
                fr: "Moteur inactif",
                nl: "Motor stationair",
                pt: "Ralenti do motor",
                ru: "Холостой ход двигателя"
            },
            Low: {
                "zh-cn": "低",
                en: "Low",
                jp: "低",
                it: "Basso",
                de: "Niedrig",
                es: "Bajo",
                fr: "Faible",
                nl: "Laag",
                pt: "Baixo",
                ru: "Низк."
            },
            Medium: {
                "zh-cn": "中等",
                en: "Medium",
                jp: "中間",
                it: "Medio",
                de: "Mittel",
                es: "Medio",
                fr: "Moyen",
                nl: "Medium",
                pt: "Médio",
                ru: "Средн."
            },
            High: {
                "zh-cn": "高",
                en: "High",
                jp: "高",
                it: "Alto",
                de: "Hoch",
                es: "Alto",
                fr: "Elevé",
                nl: "Hoog",
                pt: "Alto",
                ru: "Высок."
            },
            MotoTest: {
                "zh-cn": "电机测试",
                en: "Motor Test",
                jp: "モーターテスト",
                it: "Test motore",
                de: "Motortest",
                es: "Prueba del motor",
                fr: "Test du moteur",
                nl: "Motor testen",
                pt: "Teste do motor",
                ru: "Проверка двигателя"
            },
            FailSafeSetting: {
                "zh-cn": "安全设置",
                en: "Failsafe Settings",
                jp: "フェイルセーフ",
                it: "Impostazioni Failsafe",
                de: "Einstellungen Ausfallsicherung",
                es: "Ajustes de seguridad",
                fr: "Paramètres de sécurité (Failsafe)",
                nl: "Instellingen uitvalbeveiliging",
                pt: "Definições da proteção contra falhas",
                ru: "Настройки аварийного режима"
            },
            FailSafe: {
                "zh-cn": "失控",
                en: "Failsafe",
                jp: "フェイルセーフ",
                it: "Failsafe",
                de: "Ausfallsicherung",
                es: "Mecanismo de seguridad",
                fr: "Sécurité (Failsafe)",
                nl: "Uitvalbeveiliging",
                pt: "Proteção contra falhas",
                ru: "Аварийный режим"
            },
            IOC: {
                "zh-cn": "智能航向",
                en: "IOC",
                jp: "IOC",
                it: "IOC",
                de: "IOC",
                es: "IOC",
                fr: "IOC",
                nl: "IOC",
                pt: "Controlo de orientação inteligente",
                ru: "IOC"
            },
            ELEVATOR: {
                "zh-cn": "俯仰",
                en: "ELEVATOR",
                jp: "昇降舵",
                it: "ELEVATORE",
                de: "HÖHENRUDER",
                es: "ELEVADOR",
                fr: "ÉLÉVATEUR",
                nl: "HOOGTEROER",
                pt: "LEME DE PROFUNDIDADE",
                ru: "РУЛЬ ВЫСОТЫ"
            },
            THROTTLE: {
                "zh-cn": "油门",
                en: "THROTTLE",
                jp: "スロットル",
                it: "ACCELERATORE",
                de: "GAS",
                es: "THROTTLE",
                fr: "MANETTE DES GAZ",
                nl: "GASHENDEL",
                pt: "ACELERADOR",
                ru: "ТЯГА"
            },
            Throttle: {
                "zh-cn": "油门",
                en: "Throttle",
                jp: "スロットル",
                it: "Acceleratore",
                de: "Gas",
                es: "Acelerador",
                fr: "Manette des gaz",
                nl: "Gashendel",
                pt: "Acelerador",
                ru: "Тяга"
            },
            GohomeSwitchOn: {
                "zh-cn": "返航开关",
                en: "RTH Switch"
            },
            Standby: {
                "zh-cn": "待命",
                en: "Standby",
                jp: "待機",
                it: "Standby",
                de: "Standby",
                es: "En espera",
                fr: "Veille",
                nl: "Stand-by",
                pt: "Em espera",
                ru: "Ожидание"
            },
            Start: {
                "zh-cn": "启动",
                en: "Start",
                jp: "開始",
                it: "Avvio",
                de: "Start",
                es: "Iniciar",
                fr: "Démarrer",
                nl: "Start",
                pt: "Iniciar",
                ru: "Запуск"
            },
            ChooseEnhancedFailsafeMethods: {
                "zh-cn": "失控行为",
                en: "Failsafe Action",
                jp: "フェイルセーフ動作を選択します。",
                it: "Azione velivolo se viene perso il segnale RC",
                de: "Verhalten bei Verlust des Fernbediensignals",
                es: "Acción de la aeronave al perder la señal del control remoto",
                fr: "Action de l'appareil en cas de perte du signal de la radiocommande",
                nl: "Luchtvaartuig inzetten als RC-signaal is onderbroken",
                pt: "Ação da aeronave em caso de perda de sinal de telecomando",
                ru: "Действие летательного аппарата при потере сигнала ПДУ"
            },
            AltGohome: {
                "zh-cn": "返航高度",
                en: "Return-to-Home Altitude",
                jp: "フェイルセーフ高度",
                it: "Altitudine del Return-To-Home",
                de: "Rückkehr-Flughöhe",
                es: "Altitud de regreso al punto de origen",
                fr: "Altitude de retour au point de départ",
                nl: "Return-to-Home-hoogte",
                pt: 'Altitude de "Voltar à posição inicial',
                ru: "Высота возврата домой"
            },
            ChooseGohomeHeading: {
                "zh-cn": "返航时机头朝向",
                en: "Heading During Return-to-Home",
                jp: "フェイルセーフ中の進行方向",
                it: "Direzione durante il return-to-home",
                de: "Flugrichtung beim Rückkehrflug",
                es: "Rumbo durante regreso al punto de origen",
                fr: "Direction lors du retour au point de départ",
                nl: "Koers tijdens Return-to-Home",
                pt: 'Rumo durante "Voltar à posição inicial"',
                ru: "Курс во время возврата домой"
            },
            ChooseYourBatteryType: {
                "zh-cn": "选择电池类型",
                en: "Select Battery Type",
                jp: "バッテリータイプを選択します。",
                it: "Selezionare il tipo di batteria",
                de: "Akku-Typ wählen",
                es: "Seleccione tipo de batería",
                fr: "Sélectionner le type de batterie",
                nl: "Accutype selecteren",
                pt: "Selecionar tipo de bateria",
                ru: "Выбрать тип аккумуляторной батареи"
            },
            ChooseLevel1Action: {
                "zh-cn": "选择一级电量报警时的行为",
                en: "Low Battery Warning Action",
                jp: "レベル１の動作を選択します。",
                it: "Azione di avvertimento livello batteria basso",
                de: "Verhalten bei niedrigem Akkuladezustand ",
                es: "Acción con aviso de batería baja",
                fr: "Action en cas d'avertissement de niveau de batterie faible",
                nl: "Waarschuwing lage accucapaciteit - actie",
                pt: "Ação em caso de aviso de bateria fraca",
                ru: "Предупреждающий сигнал низкого уровня заряда аккумуляторной батареи"
            },
            ChooseLevel2Action: {
                "zh-cn": "选择二级电量报警时的行为",
                en: "Critical Low Battery Warning Action",
                jp: "レベル２の動作を選択します。",
                it: "Azione di avvertimento batteria quasi scarica",
                de: "Verhalten bei sehr niedrigem Akkuladezustand",
                es: "Acción con aviso de batería baja crítica",
                fr: "Action en cas d'avertissement de niveau de batterie critique",
                nl: "Waarschuwing extreem lage accucapaciteit - actie",
                pt: "Ação em caso de aviso de bateria extremamente fraca",
                ru: "Предупреждающий сигнал критически низкого уровня заряда аккумуляторной батареи"
            },
            Percent: {
                "zh-cn": "百分比",
                en: "Percent",
                jp: "割合",
                it: "Percentuale",
                de: "Prozent",
                es: "Porcentaje",
                fr: "Pourcentage",
                nl: "Procent",
                pt: "Percentagem",
                ru: "Процент"
            },
            Voltage: {
                "zh-cn": "电压",
                en: "Voltage",
                jp: "電圧",
                it: "Tensione",
                de: "Spannung",
                es: "Voltaje",
                fr: "Voltage",
                nl: "Voltage",
                pt: "Tensão",
                ru: "Напряжение"
            },
            HomeLock: {
                "zh-cn": "返航点锁定",
                en: "Home Lock",
                jp: "ホームロック",
                it: "Home Lock",
                de: "Home Lock",
                es: "Bloqueo de origen",
                fr: "Home Lock",
                nl: "Basisvergrendeling",
                pt: "Bloqueio de posição inicial",
                ru: "Фиксация домашней точки"
            },
            HomeLockDesc1: {
                "zh-cn": "在返航点锁定模式下，向后拨动遥控器的俯仰杆可让飞行器拉回返航点。左右拨动遥控器的横滚杆可让飞行器围绕返航点绕圈飞行。",
                en: "In Home Lock Mode, push the right stick backward and the aircraft will fly back to the home point. Push the left stick left or right and the aircraft will fly around the home point."
            },
            CourseLock: {
                "zh-cn": "航向锁定",
                en: "Course Lock",
                jp: "コースロック",
                it: "Course Lock",
                de: "Course Lock",
                es: "Bloqueo de rumbo",
                fr: "Course Lock",
                nl: "Routevergrendeling",
                pt: "Bloqueio de curso",
                ru: "Фиксация курса"
            },
            CourseLockDesc1: {
                "zh-cn": "航向锁定是指飞行器将按照设定时机头所在的朝向为飞行前方方向，也就是操控飞行器的前向时，不随飞行器机头的朝向而改变。",
                en: "Adjust the heading of your aircraft and apply Course Lock. The forward direction will be fixed until you reset it or exit Course Lock Mode.",
                jp: "機体の進行方向を調整しコースロックを適用します。リセットまたはコースロックモードを終了するまで進行方向は固定されます。",
                it: "Regolare la direzione del velivolo e attivare il Course Lock. L'orientamento in avanti rimarrà fisso fino a quando non verrà resettato o si uscirà dalla modalità Course Lock",
                de: "Die Kursrichtung der Drohne einstellen und Course Lock anwenden. Die Vorwärtsrichtung bleibt unverändert, bis sie neu eingestellt oder der Course Lock-Modus beendet wird.",
                es: "Ajuste el rumbo de su aeronave y aplique Bloqueo de rumbo. La dirección de avance se mantendrá fija hasta que la resetee o salga del modo Bloqueo de rumbo.",
                fr: "Réglez l'orientation de votre appareil et activez le mode Verrouillage de trajectoire. L'orientation sera maintenue jusqu'à sa réinitialisation ou à la désactivation du mode Verrouillage de trajectoire.",
                nl: "Pas de richting van uw luchtvaartuig aan en pas routevergrendeling toe. De voorwaartse richting wordt vastgezet totdat u reset of de routevergrendelingsmodus afsluit.",
                pt: "Ajuste o rumo da sua aeronave e aplique o bloqueio de curso. A direção em frente será fixa até a reiniciar ou até sair do modo de bloqueio de curso.",
                ru: "Отрегулируйте курс летательного аппарата и примените фиксацию курса. Направление вперед будет зафиксировано до тех пор, пока вы не сбросите его или не выйдете из режима фиксации курса."
            },
            Topology: {
                "zh-cn": "系统拓扑图",
                en: "Topology",
                jp: "トポロジー",
                it: "Topologia",
                de: "Topologie",
                es: "Topología",
                fr: "Topologie",
                nl: "Topologie",
                pt: "Topologia",
                ru: "Топология"
            },
            Gimbal: {
                "zh-cn": "云台",
                en: "Gimbal",
                jp: "ジンバル",
                it: "Gimbal",
                de: "Gimbal",
                es: "Gimbal",
                fr: "Nacelle",
                nl: "Gimbal",
                pt: "Suspensão cardã",
                ru: "Подвес"
            },
            Parachute: {
                "zh-cn": "降落伞",
                en: "Parachute",
                jp: "パラシュート",
                it: "Paracadute",
                de: "Fallschirm",
                es: "Paracaídas",
                fr: "Parachute",
                nl: "Parachute",
                pt: "Para-quedas",
                ru: "Парашют"
            },
            FChannel: {
                "zh-cn": "功能通道",
                en: "Function Channels",
                jp: "機能チャンネル",
                it: "Canali Funzioni",
                de: "Funktionskanäle",
                es: "Canales de función",
                fr: "Canaux de fonction",
                nl: "Functiekanalen",
                pt: "Canais de funções",
                ru: "Функциональные каналы"
            },
            OutputFrequency: {
                "zh-cn": "输出频率",
                en: "Output Frequency",
                jp: "出力周波数",
                it: "Frequenza in uscita",
                de: "Ausgangsfrequenz",
                es: "Frecuencia de salida",
                fr: "Fréquence en sortie",
                nl: "Uitvoerfrequentie",
                pt: "Frequência de saída",
                ru: "Выходная частота"
            },
            Servotravellimit: {
                "zh-cn": "舵机行程限制",
                en: "Servo Travel Limit",
                jp: "サーボ移動限界",
                it: "Limite corsa del servo",
                de: "Servo-Verfahrweggrenze",
                es: "Límite de desplazamiento del servo",
                fr: "Limite de trajectoire (servo)",
                nl: "Servo-reislimiet",
                pt: "Limite da deslocação curso servo",
                ru: "Предельное значение хода сервопривода"
            },
            Max: {
                "zh-cn": "最大",
                en: "Max",
                jp: "最大",
                it: "Max",
                de: "Max.",
                es: "Máx.",
                fr: "Max",
                nl: "Max",
                pt: "Máx.",
                ru: "Макс."
            },
            Min: {
                "zh-cn": "最小",
                en: "Min",
                jp: "最小",
                it: "Min",
                de: "Min.",
                es: "Mín.",
                fr: "Min",
                nl: "Min",
                pt: "Mín.",
                ru: "Мин."
            },
            Automaticcontrolgain: {
                "zh-cn": "自动控制感度",
                en: "Automatic Control Gain",
                jp: "自動制御ゲイン",
                it: "Controllo Automatico del Gain",
                de: "Automatische Steuerungsverst.",
                es: "Ganancia de control automática",
                fr: "Contrôle automatique du gain",
                nl: "Toename automatische bediening",
                pt: "Ganho de controlo automático",
                ru: "Чувствительность автоматического управления"
            },
            REV: {
                "zh-cn": "反向",
                en: "REV",
                jp: "REV",
                it: "REV",
                de: "REV",
                es: "REV",
                fr: "REV",
                nl: "REV",
                pt: "REV",
                ru: "REV"
            },
            Manualpitchcontrolspeed: {
                "zh-cn": "手动控制俯仰速度",
                en: "Manual Control Pitch Speed",
                jp: "手動ピッチ制御速度",
                it: "Velocità di controllo manuale del beccheggio",
                de: "Manuelle Nickgeschwindigkeit",
                es: "Velocidad de control de cabeceo manual",
                fr: "Vitesse du contrôle d'inclinaison manuel",
                nl: "Handmatige bedieningssnelheid hellen",
                pt: "Velocidade de controlo de passo manual",
                ru: "Скорость ручного управления углом тангажа"
            },
            Controlswitch: {
                "zh-cn": "控制开关",
                en: "Control Switch",
                jp: "コントロールスイッチ",
                it: "Interruttore di controllo",
                de: "Steuerschalter",
                es: "Interruptor de control",
                fr: "Commutateur de contrôle",
                nl: "Bedieningsschakelaar",
                pt: "Interruptor de controlo",
                ru: "Переключатель управления"
            },
            Gearstatus: {
                "zh-cn": "起落架状态",
                en: "Landing Gear Status",
                jp: "ギアステータス",
                it: "Stato carrello di atterraggio",
                de: "Status Landegestell",
                es: "Estado del tren de aterrizaje",
                fr: "État du train d'atterrissage",
                nl: "Status landingsgestel",
                pt: "Estado do tem de aterragem",
                ru: "Состояние шасси"
            },
            Intelligentgear: {
                "zh-cn": "智能起落架",
                en: "Intelligent Landing Gear",
                jp: "インテリジェントギア",
                it: "Carrello di atterraggio intelligente",
                de: "Intelligent Landing Gear",
                es: "Tren de aterrizaje inteligente",
                fr: "Intelligent Landing Gear",
                nl: "Intelligent Landing Gear",
                pt: "Intelligent Landing Gear",
                ru: "Intelligent Landing Gear"
            },
            IntelligentParachute: {
                "zh-cn": "智能降落伞",
                en: "Intelligent Parachute",
                jp: "インテリジェントパラシュート",
                it: "Paracadute intelligente",
                de: "Intelligent Parachute",
                es: "Paracaídas inteligente",
                fr: "Intelligent Parachute",
                nl: "Intelligent Parachute",
                pt: "Intelligent Parachute",
                ru: "Intelligent Parachute"
            },
            Directionsetting: {
                "zh-cn": "朝向设置",
                en: "Heading Settings",
                jp: "進行方向の設定",
                it: "Impostazioni della direzione",
                de: "Einstellungen Kursrichtung",
                es: "Ajustes de rumbo",
                fr: "Paramètre d'orientation",
                nl: "Koersinstellingen",
                pt: "Definições do rumo",
                ru: "Настройки курса"
            },
            ConnectedDevices: {
                "zh-cn": "已连接设备",
                en: "Connected Devices",
                jp: "接続されているデバイス",
                it: "Dispositivi collegati",
                de: "Verbundene Geräte",
                es: "Dispositivos conectados",
                fr: "Appareils connectés",
                nl: "Aangesloten apparaten",
                pt: "Dispositivos ligados",
                ru: "Подключенные устройства"
            },
            UpgradeNow: {
                "zh-cn": "立即升级",
                en: "Update Now",
                jp: "今すぐアップグレードします。",
                it: "Aggiornare adesso",
                de: "Jetzt aktualisieren",
                es: "Actualizar ahora",
                fr: "Mettre à jour maintenant",
                nl: "Nu bijwerken",
                pt: "Atualizar agora",
                ru: "Обновить сейчас"
            },
            SDK: {
                "zh-cn": "DJI Onboard SDK",
                en: "DJI Onboard SDK",
                jp: "DJIオンボードSDK",
                it: "SDK Onboard DJI",
                de: "DJI Onboard SDK",
                es: "DJI Onboard SDK",
                fr: "DJI Onboard SDK",
                nl: "DJI Onboard SDK",
                pt: "DJI Onboard SDK",
                ru: "DJI Onboard SDK"
            },
            EnableAPIControl: {
                "zh-cn": "启动 API 控制",
                en: "Enable API Control",
                jp: "APIコントロールを有効にします。",
                it: "Attivare controllo API",
                de: "API-Steuerung aktivieren",
                es: "Activar control por API",
                fr: "Activer le contrôle API",
                nl: "API-bediening inschakelen",
                pt: "Ativar controlo de API",
                ru: "Активировать управление API"
            },
            APIHardwarePort: {
                "zh-cn": "API 硬件端口",
                en: "API Hardware Port",
                jp: "APIハードウェアポート",
                it: "Porta hardware API",
                de: "API-Hardware-Anschluss",
                es: "Puerto de hardware API",
                fr: "Port API matériel",
                nl: "API-hardwarepoort",
                pt: "Porta de hardware de API",
                ru: "Аппаратный порт API"
            },
            BaudDataTransmissionRates: {
                "zh-cn": "波特率与数据传输率",
                en: "Baud & Data Transmission Rates",
                jp: "ボー＆データ伝送速度",
                it: "Baud rate e velocità di trasmissione dati",
                de: "Baud- & Datenübertragungsrate",
                es: "Tasas de transmisión de datos y baudios",
                fr: "Débits de transmission des données",
                nl: "Snelheden baud- en gegevenstransmissie",
                pt: "Velocidade de baud e de transmissão de dados",
                ru: "Скорость передачи данных и скорость в бодах"
            },
            Timestamp: {
                "zh-cn": "时间戳",
                en: "Timestamp",
                jp: "タイムスタンプ",
                it: "Marca temporale",
                de: "Zeitstempel",
                es: "Sello de tiempo",
                fr: "Horodatage",
                nl: "Tijdstempel",
                pt: "Carimbo temporal",
                ru: "Отметка времени"
            },
            quaternion: {
                "zh-cn": "姿态四元数",
                en: "Attitude Quaternions",
                jp: "姿勢四元数",
                it: "Quaternioni assetto",
                de: "Fluglage-Quaternionen",
                es: "Cuaterniones de actitud",
                fr: "Quaternions d'altitude",
                nl: "Houdingsquaternions",
                pt: "Quaterniões de atitude",
                ru: "Кватернионы пространственного положения"
            },
            Acceleration: {
                "zh-cn": "加速度",
                en: "Acceleration",
                jp: "加速",
                it: "Accelerazione",
                de: "Beschleunigung",
                es: "Aceleración",
                fr: "Accélération",
                nl: "Versnelling",
                pt: "Aceleração",
                ru: "Ускорение"
            },
            GroundFrame: {
                "zh-cn": "大地坐标系",
                en: "Ground Frame",
                jp: "対地速度",
                it: "Sistema di riferimento terrestre (Ground Frame)",
                de: "Geo-Koordinatensystem",
                es: "Coordenadas geodésicas",
                fr: "Cadre (sol)",
                nl: "Grondmassa",
                pt: "Coordenadas geodésicas",
                ru: "Геодезические координаты"
            },
            Velocity: {
                "zh-cn": "速度",
                en: "Velocity",
                jp: "速度",
                it: "Velocità",
                de: "Geschwindigkeit",
                es: "Velocidad",
                fr: "Vélocité",
                nl: "Snelheid",
                pt: "Velocidade",
                ru: "Скорость"
            },
            AngularVelocity: {
                "zh-cn": "角速度",
                en: "Angular Velocity",
                jp: "角速度",
                it: "Velocità angolare",
                de: "Winkelgeschwindigkeit",
                es: "Velocidad angular",
                fr: "Vélocité angulaire",
                nl: "Hoeksnelheid",
                pt: "Velocidade angular",
                ru: "Угловая скорость"
            },
            BodyFrame: {
                "zh-cn": "机体坐标系",
                en: "Body Frame",
                jp: "本体フレーム",
                it: "Corpo del Velivolo (Body Frame)",
                de: "Rechtshändiges Koordinatensystem",
                es: "Estructura de chasis",
                fr: "Cadre (corps)",
                nl: "Carrosserie",
                pt: "Estrutura na caixa",
                ru: "Каркас"
            },
            GPSModule: {
                "zh-cn": "位置",
                en: "Postion",
                jp: "位置",
                it: "Posizione",
                de: "Position",
                es: "Posición",
                fr: "Position",
                nl: "Positie",
                pt: "Posição",
                ru: "Положение"
            },
            Magnetometer: {
                "zh-cn": "磁力计",
                en: "Magnetometer",
                jp: "磁力計",
                it: "Magnetometro",
                de: "Magnetometer",
                es: "Magnetómetro",
                fr: "Magnétomètre",
                nl: "Magnetometer",
                pt: "Magnetómetro",
                ru: "Магнитометр"
            },
            RCChannels: {
                "zh-cn": "遥控器通道数据",
                en: "Remote Controller Channel Data",
                jp: "RCチャンネルデータ",
                it: "Dati canali RC",
                de: "Kanaldaten Fernbedienung",
                es: "Datos de canales del RC",
                fr: "Données des canaux de radiocommande",
                nl: "Gegevens RC-kanalen",
                pt: "Dados dos canais do telecomando",
                ru: "Данные каналов ДУ"
            },
            GimbalOrientation: {
                "zh-cn": "云台数据",
                en: "Gimbal Data",
                jp: "ジンバルデータ",
                it: "Dati Gimbal",
                de: "Gimbal-Daten",
                es: "Datos del gimbal",
                fr: "Données de la nacelle",
                nl: "Gimbalgegevens",
                pt: "Dados da suspensão cardã",
                ru: "Данные подвеса"
            },
            flystatus: {
                "zh-cn": "飞行状态",
                en: "Flight Status",
                jp: "フライト状況",
                it: "Stato di volo",
                de: "Flugstatus",
                es: "Estado de vuelo",
                fr: "État de vol",
                nl: "Vluchtstatus",
                pt: "Estado de voo",
                ru: "Статус полета"
            },
            BatteryLevel: {
                "zh-cn": "电池电量",
                en: "Battery Level",
                jp: "バッテリー残量",
                it: "Livello di carica della batteria",
                de: "Akkuladezustand",
                es: "Nivel de batería",
                fr: "Niveau de la batterie",
                nl: "Accuniveau",
                pt: "Nível da bateria",
                ru: "Индикатор заряда аккумуляторной батареи"
            },
            ControlDevice: {
                "zh-cn": "控制信息",
                en: "Control Information",
                jp: "コントロール情報",
                it: "Informazioni di controllo",
                de: "Steuerungsinformationen",
                es: "Información de control",
                fr: "Informations de contrôle",
                nl: "Controlegegevens",
                pt: "Informação de controlo",
                ru: "Информация об управлении"
            },
            DataType: {
                "zh-cn": "数据类型",
                en: "Data Type",
                jp: "データタイプ",
                it: "Tipo di dati",
                de: "Datentyp",
                es: "Tipo de datos",
                fr: "Type de données",
                nl: "Gegevenstype",
                pt: "Tipo de dados",
                ru: "Тип данных"
            },
            ACC: {
                "zh-cn": "加速度计",
                en: "ACC",
                jp: "ACC",
                it: "ACC",
                de: "ACC",
                es: "ACC",
                fr: "ACC",
                nl: "ACC",
                pt: "ACC",
                ru: "ACC"
            },
            GYRO: {
                "zh-cn": "陀螺仪",
                en: "GYRO",
                jp: "ジャイロ",
                it: "GYRO",
                de: "GYRO",
                es: "GYRO",
                fr: "GYRO",
                nl: "GYRO",
                pt: "GYRO",
                ru: "GYRO"
            },
            ALTI: {
                "zh-cn": "海拔",
                en: "ALTI",
                jp: "ALTI",
                it: "ALTI",
                de: "ALTI",
                es: "ALTI",
                fr: "ALTI",
                nl: "ALTI",
                pt: "ALTI",
                ru: "ALTI"
            },
            Hz: {
                "zh-cn": "Hz",
                en: "Hz",
                jp: "Hz",
                it: "Hz",
                de: "Hz",
                es: "Hz",
                fr: "Hz",
                nl: "Hz",
                pt: "Hz",
                ru: "Гц"
            },
            OFF: {
                "zh-cn": "关闭",
                en: "OFF",
                jp: "オフ",
                it: "OFF",
                de: "AUS",
                es: "Apagado",
                fr: "OFF",
                nl: "UIT",
                pt: "DESLIGADO",
                ru: "ВЫКЛ."
            },
            ON: {
                "zh-cn": "开启",
                en: "ON",
                jp: "オン",
                it: "ON",
                de: "AN",
                es: "Encendido",
                fr: "ON",
                nl: "AAN",
                pt: "LIGADO",
                ru: "ВКЛ."
            },
            Custom: {
                "zh-cn": "自定义",
                en: "Custom",
                jp: "カスタム",
                it: "Personalizza",
                de: "Benutzerdefiniert",
                es: "Personalizar",
                fr: "Custom",
                nl: "Aangepast",
                pt: "Personalizado",
                ru: "Пользовательск."
            },
            Forward: {
                "zh-cn": "朝向返航点",
                en: "Heading Home Point",
                jp: "ホームポイント方向へ",
                it: "Verso il punto di partenza",
                de: "Zum Startpunkt",
                es: "Hacia punto de origen",
                fr: "Vers le point de départ",
                nl: "Naar de basis",
                pt: "Em direção a posição inicial",
                ru: "К домашней точке"
            },
            Leftw: {
                "zh-cn": "向左",
                en: "Left",
                jp: "左",
                it: "Sinistra",
                de: "Links",
                es: "Izquierda",
                fr: "Gauche",
                nl: "Links",
                pt: "Esquerda",
                ru: "Влево"
            },
            Backward: {
                "zh-cn": "背向返航点",
                en: "Back to Home Point",
                jp: "ホームポイントと反対方向を向いている",
                it: "Rivolto verso la parte opposta dell'Home Point",
                de: "Weg vom Startpunkt",
                es: "Orientación opuesta al punto de origen",
                fr: "Opposé au point de départ",
                nl: "Van de basis af gericht",
                pt: "Para a direção contrária à posição inicial",
                ru: "В сторону от домашней точки"
            },
            Rightw: {
                "zh-cn": "向右",
                en: "Right",
                jp: "右",
                it: "Destra",
                de: "Rechts",
                es: "Derecha",
                fr: "Droite",
                nl: "Rechts",
                pt: "Direita",
                ru: "Вправо"
            },
            Heading1: {
                "zh-cn": "朝向1",
                en: "Heading1",
                jp: "進行方向１",
                it: "Heading1",
                de: "Heading1",
                es: "Rumbo 1",
                fr: "Heading1",
                nl: "Koers1",
                pt: "Heading1",
                ru: "Курс1"
            },
            Heading2: {
                "zh-cn": "朝向2",
                en: "Heading2",
                jp: "進行方向２",
                it: "Heading2",
                de: "Heading2",
                es: "Rumbo 2",
                fr: "Heading2",
                nl: "Koers2",
                pt: "Heading2",
                ru: "Курс2"
            },
            Always: {
                "zh-cn": "总是",
                en: "Always",
                jp: "常に",
                it: "Sempre",
                de: "Immer",
                es: "Siempre",
                fr: "Volez toujours",
                nl: "Altijd",
                pt: "Sempre",
                ru: "Всегда"
            },
            AfterWP: {
                "zh-cn": "地面站",
                en: "After WP",
                jp: " WP後",
                it: "Dopo WP",
                de: "Nach WP",
                es: "Después de WP",
                fr: "Après WP",
                nl: "Na WP",
                pt: "Após WP",
                ru: "После WP"
            },
            Hover: {
                "zh-cn": "悬停",
                en: "Hover",
                jp: "ホバリングをします。",
                it: "Rimanere sospeso in posizione",
                de: "Schwebeflug",
                es: "Vuelo estacionario",
                fr: "Effectuer un vol stationnaire",
                nl: "Zweven",
                pt: "Voo estacionário",
                ru: "Зависание"
            },
            enabled: {
                "zh-cn": "生效",
                en: "Enabled",
                jp: "有効になっています。",
                it: "Abilitato",
                de: "Freigeschaltet",
                es: "Activado",
                fr: "Activé",
                nl: "Ingeschakeld",
                pt: "Ativada",
                ru: "Активно"
            },
            notsend: {
                "zh-cn": "不发送",
                en: "Do Not Send",
                jp: "送信していません。",
                it: "Non inviare",
                de: "Nicht senden",
                es: "No enviar",
                fr: "Ne pas envoyer",
                nl: "Niet verzenden",
                pt: "Não enviar",
                ru: "Не отправлять"
            },
            REAL: {
                "zh-cn": "融合数据",
                en: "Data Fusion",
                jp: "データ融合",
                it: "Fusione dati",
                de: "Datenfusion",
                es: "Fusión de datos",
                fr: "Fusion de données",
                nl: "Gegevenssamenvoeging",
                pt: "Fusão de dados",
                ru: "Объединение данных"
            },
            REALGROUND: {
                "zh-cn": "实体地面站",
                en: "REAL GROUND",
                jp: "実際の地面",
                it: "TERRENO REALE",
                de: "ECHTER BODEN",
                es: "SUELO REAL",
                fr: "SOL RÉEL",
                nl: "ECHTE MASSA",
                pt: "TERRA REAL",
                ru: "REAL GROUND"
            },
            A3: {
                "zh-cn": "A3",
                en: "A3",
                jp: "A3",
                it: "A3",
                de: "A3",
                es: "A3",
                fr: "A3",
                nl: "A3",
                pt: "A3",
                ru: "A3"
            },
            A3Pro: {
                "zh-cn": "A3 Pro",
                en: "A3 Pro",
                jp: "A3 Pro",
                it: "A3 Pro",
                de: "A3 Pro",
                es: "A3 Pro",
                fr: "A3 PRO",
                nl: "A3 Pro",
                pt: "A3 Pro",
                ru: "A3 Pro"
            },
            Pro: {
                "zh-cn": "Pro",
                en: "Pro",
                jp: "Pro",
                it: "Pro",
                de: "Pro",
                es: "Pro",
                fr: "Pro",
                nl: "Pro",
                pt: "Pro",
                ru: "Pro"
            },
            Standard: {
                "zh-cn": "Standard",
                en: "Standard",
                jp: "標準",
                it: "Standard",
                de: "Standard",
                es: "Estándar",
                fr: "Standard",
                nl: "Standaard",
                pt: "Padrão",
                ru: "Standard"
            },
            loginerror: {
                "zh-cn": "账号或密码错误。",
                en: "Incorrect Email or Password.",
                jp: "Eメールまたはパスワードが正しくありません。",
                it: "E-mail o password errata",
                de: "E-Mail oder Kennwort falsch.",
                es: "Correo electrónico o contraseña erróneos.",
                fr: "E-mail ou mot de passe incorrect.",
                nl: "Onjuist e-mailadres of wachtwoord.",
                pt: "E-mail ou palavra-passe incorreto.",
                ru: "Неверный адрес электронной почты или пароль."
            },
            logintimeout: {
                "zh-cn": "登录超时。",
                en: "Login timeout.",
                jp: "ログインタイムアウト",
                it: "Timeout login.",
                de: "Zeitüberschreitung beim Anmelden.",
                es: "Tiempo de espera de inicio de sesión agotado.",
                fr: "Expiration de la connexion.",
                nl: "Time-out bij aanmelding.",
                pt: "Tempo esgotado do início de sessão.",
                ru: "Время входа в систему истекло."
            },
            forgetpw: {
                "zh-cn": "忘记密码？",
                en: "Forgot your password?",
                jp: "パスワードをお忘れですか？",
                it: "Hai dimenticato la password?",
                de: "Kennwort vergessen?",
                es: "¿Ha olvidado su contraseña?",
                fr: "Mot de passe oublié ?",
                nl: "Wachtwoord vergeten?",
                pt: "Esqueceu-se da palavra-passe?",
                ru: "Забыли пароль?"
            },
            signup: {
                "zh-cn": "注册",
                en: "Sign up",
                jp: "サインアップします。",
                it: "Iscriviti",
                de: "Registrieren",
                es: "Inscribirse",
                fr: "Inscription",
                nl: "Registreren",
                pt: "Registar-se",
                ru: "Зарегистрироваться"
            },
            Password: {
                "zh-cn": "密码",
                en: "Password",
                jp: "パスワード",
                it: "Password",
                de: "Passwort",
                es: "Contraseña",
                fr: "Mot de passe",
                nl: "Wachtwoord",
                pt: "Palavra-passe",
                ru: "Пароль"
            },
            Email: {
                "zh-cn": "邮箱",
                en: "Email",
                jp: "Eメール",
                it: "E-mail",
                de: "E-Mail-Adresse",
                es: "Correo electrónico",
                fr: "E-mail",
                nl: "E-mail",
                pt: "E-mail",
                ru: "Адрес электронной почты"
            },
            SignIn: {
                "zh-cn": "登录",
                en: "Sign in",
                jp: "サインインします。",
                it: "Accedi",
                de: "Anmelden",
                es: "Iniciar sesión",
                fr: "Connexion",
                nl: "Aanmelden",
                pt: "Iniciar sessão",
                ru: "Войти"
            },
            Baud: {
                "zh-cn": "波特率",
                en: "Baud Rate",
                jp: "ボー速度",
                it: "Baud Rate",
                de: "Baudrate",
                es: "Tasa de baudios",
                fr: "Débit de transmission",
                nl: "Baudsnelheid",
                pt: "Velocidade de baud",
                ru: "Скорость передачи данных в бодах"
            },
            FirmwareList: {
                "zh-cn": "固件列表",
                en: "Firmware List",
                jp: "ファームウェアリスト",
                it: "Elenco firmware",
                de: "Firmware-Liste",
                es: "Lista de firmware",
                fr: "Liste des micrologiciels",
                nl: "Firmware-lijst",
                pt: "Lista de firmware",
                ru: "Список микропрограммного обеспечения"
            },
            curver: {
                "zh-cn": "当前版本",
                en: "Current",
                jp: "現在のバージョン",
                it: "Attuale",
                de: "Strom",
                es: "Actual",
                fr: "Courant",
                nl: "Huidige",
                pt: "Atual",
                ru: "Текущий"
            },
            Degrade: {
                "zh-cn": "降级",
                en: "Downgrade",
                jp: "ダウングレード",
                it: "Versione precedente",
                de: "Downgrade",
                es: "Volver a versión anterior",
                fr: "Rétrograder",
                nl: "Downgraden",
                pt: "Downgrade",
                ru: "Понизить"
            },
            fecthlistfail: {
                "zh-cn": "获取固件列表失败。",
                en: "Cannot Load Firmware List.",
                jp: "ファームウェアリストを読み込みできません。",
                it: "Impossibile caricare l'elenco firmware",
                de: "Firmware-Liste kann nicht geladen werden.",
                es: "Imposible cargar lista de firmware.",
                fr: "Impossible de charger la liste des micrologiciels.",
                nl: "Kan firmware-lijst niet laden.",
                pt: "Não é possível carregar lista de firmware.",
                ru: "Невозможно загрузить список микропрограммного обеспечения."
            },
            please: {
                "zh-cn": "请",
                en: "Please",
                jp: "お願いします。",
                it: "Per favore",
                de: "Bitte",
                es: "Por favor,",
                fr: "Veuillez",
                nl: "Alstublieft",
                pt: "Por favor",
                ru: "Пожалуйста,"
            },
            Retry: {
                "zh-cn": "重试",
                en: "Retry",
                jp: "やり直します。",
                it: "riprovare",
                de: "Erneut versuchen",
                es: "Volver a intentarlo",
                fr: "réessayer",
                nl: "Opnieuw proberen",
                pt: "Tentar novamente",
                ru: "повторите попытку"
            },
            CustomUpgrade: {
                "zh-cn": "自定义升级",
                en: "Custom Update",
                jp: "カスタムアップグレード",
                it: "Aggiornamento personalizzato",
                de: "Benutzerdefiniertes Update",
                es: "Actualización personalizada",
                fr: "Mise à jour personnalisée",
                nl: "Aangepaste update",
                pt: "Atualização personalizada",
                ru: "Пользовательское обновление"
            },
            UpgradeFail: {
                "zh-cn": "升级失败！",
                en: "Update Failed.",
                jp: "アップデートに失敗しました。",
                it: "L'aggiornamento non è riuscito.",
                de: "Update fehlgeschlagen.",
                es: "La actualización ha fallado.",
                fr: "Échec de la mise à jour.",
                nl: "Updaten mislukt.",
                pt: "A atualização falhou.",
                ru: "Не удалось выполнить обновление."
            },
            Upgrading: {
                "zh-cn": "正在升级",
                en: "Updating",
                jp: "アップデート中です。",
                it: "Aggiornamento in corso",
                de: "Wird aktualisiert",
                es: "Actualizando",
                fr: "Mise à jour en cours",
                nl: "Updaten",
                pt: "A atualizar",
                ru: "Обновление"
            },
            Downloading: {
                "zh-cn": "正在下载",
                en: "Downloading",
                jp: "ダウンロード中です。",
                it: "Download in corso",
                de: "Wird heruntergeladen",
                es: "Descargando",
                fr: "Téléchargement en cours",
                nl: "Downloaden",
                pt: "Transferência",
                ru: "Загрузка"
            },
            Upgrade: {
                "zh-cn": "升级",
                en: "Upgrade",
                jp: "アップデート",
                it: "Aggiornamento",
                de: "Update",
                es: "Actualizar",
                fr: "Mise à niveau",
                nl: "Upgraden",
                pt: "Upgrade",
                ru: "Обновление"
            },
            Download: {
                "zh-cn": "下载",
                en: "Download",
                jp: "ダウンロード",
                it: "Download",
                de: "Download",
                es: "Descargar",
                fr: "Téléchargement",
                nl: "Downloaden",
                pt: "Transferir",
                ru: "Загрузка"
            },
            UpgradeSuccess: {
                "zh-cn": "升级成功！",
                en: "Update Complete!",
                jp: "アップデート完了！",
                it: "Aggiornamento completato",
                de: "Update abgeschlossen!",
                es: "¡Actualización completa!",
                fr: "Mise à jour terminée !",
                nl: "Update voltooid!",
                pt: "Atualização concluída!",
                ru: "Обновление завершено!"
            },
            upnotice1: {
                "zh-cn": "注意：请重新为设备供电后再尝试升级固件。",
                en: "Note: Power off and on the DJI device again before retry."
            },
            upnotice2: {
                "zh-cn": "升级大约需要",
                en: "Update requires approximately:",
                jp: "アップデートを完了する時間を予測します。",
                it: "Tempo stimato per il completamento dell'aggiornamento:",
                de: "Geschätzter Zeitaufwand für das Update:",
                es: "Tiempo estimado para finalizar la actualización:",
                fr: "Durée estimée de la mise à jour :",
                nl: "Geschatte tijd om de update te voltooien:",
                pt: "Estimativa de tempo para concluir a atualização:",
                ru: "Расчетное время на выполнение обновления:"
            },
            upnotice3: {
                "zh-cn": "请确保设备已供电且电脑已连接至网络。",
                en: "Ensure the DJI device is powered on and the computer is connected to the Internet."
            },
            upnotice4: {
                "zh-cn": "设备已成功升级至",
                en: "The DJI device firmware has been updated to:"
            },
            upnotice5: {
                "zh-cn": "整个过程大约需要15分钟，请确保",
                en: "The whole update requires approximately 15 minutes. The following items are required:"
            },
            upnotice6: {
                "zh-cn": "连接电脑至网络",
                en: "Computer is connected to the internet.",
                jp: "コンピューターはインターネットに接続されています。",
                it: "Il computer è collegato a internet.",
                de: "Computer ist mit dem Internet verbunden.",
                es: "El ordenador está conectado a Internet.",
                fr: "Ordinateur connecté à Internet.",
                nl: "Computer is verbonden met internet.",
                pt: "Computador ligado à Internet.",
                ru: "Компьютер подключен к Интернету."
            },
            upnotice7: {
                "zh-cn": "设备已供电",
                en: "DJI device is powered on.",
                jp: " Air Systemの電源が入っています。",
                it: "Il sistema aereo è acceso.",
                de: "Flugsystem ist eingeschaltet.",
                es: "El Air System está encendido.",
                fr: "Air System sous tension.",
                nl: "Air System is ingeschakeld.",
                pt: "O Air System está ligado.",
                ru: "Питание Air System включено."
            },
            upnotice8: {
                "zh-cn": "不要断开USB连接",
                en: "USB Connection"
            },
            StartUpgrade: {
                "zh-cn": "开始升级",
                en: "Start Update",
                jp: "アップデートを開始します。",
                it: "Avvio aggiornamento",
                de: "Update starten",
                es: "Iniciar actualización",
                fr: "Lancer la mise à jour",
                nl: "Update starten",
                pt: "Iniciar a atualização",
                ru: "Начать обновление"
            },
            FWUpgrade: {
                "zh-cn": "固件升级",
                en: "Firmware Update",
                jp: "ファームウェアのアップデート",
                it: "Aggiornamento firmware",
                de: "Firmware-Update",
                es: "Actualización de firmware",
                fr: "Mise à jour du micrologiciel",
                nl: "Firmware-update",
                pt: "Atualização de firmware",
                ru: "Обновление микропрограммного обеспечения"
            },
            uploadandUpgrade: {
                "zh-cn": "上传文件并升级",
                en: "Upload file and update",
                jp: "ファイルをアップロードしアップデートします。",
                it: "Caricare file ed eseguire l'aggiornamento",
                de: "Datei hochladen und aktualisieren",
                es: "Cargar archivo y actualizar",
                fr: "Télécharger le fichier et mettre à jour",
                nl: "Bestand en update uploaden",
                pt: "Carregar ficheiro e atualizar",
                ru: "Выгрузить файл и выполнить обновление"
            },
            Back: {
                "zh-cn": "返回",
                en: "Back",
                jp: "戻る",
                it: "Indietro",
                de: "Zurück",
                es: "Atrás",
                fr: "Retour",
                nl: "Terug",
                pt: "Retroceder",
                ru: "Назад"
            },
            hours: {
                "zh-cn": "小时",
                en: "hours",
                jp: "時間",
                it: "ore",
                de: "Stunden",
                es: "horas",
                fr: "heures",
                nl: "uur",
                pt: "horas",
                ru: "часы"
            },
            minutes: {
                "zh-cn": "分钟",
                en: "minutes",
                jp: "分",
                it: "minuti",
                de: "Minuten",
                es: "minutos",
                fr: "minutes",
                nl: "minuten",
                pt: "minutos",
                ru: "минуты"
            },
            seconds: {
                "zh-cn": "秒",
                en: "seconds",
                jp: "秒",
                it: "secondi",
                de: "Sekunden",
                es: "segundos",
                fr: "secondes",
                nl: "seconden",
                pt: "segundos",
                ru: "секунды"
            },
            pperiod: {
                "zh-cn": "。",
                en: ".",
                jp: "°",
                it: ".",
                de: ".",
                es: ".",
                fr: ".",
                nl: ".",
                pt: ".",
                ru: "."
            },
            calibration: {
                "zh-cn": "校准",
                en: "Calibration",
                jp: "キャリブレーション",
                it: "Calibrazione",
                de: "Kalibrierung",
                es: "Calibración",
                fr: "Étalonnage",
                nl: "Kalibratie",
                pt: "Calibragem",
                ru: "Калибровка"
            },
            Finish: {
                "zh-cn": "完成",
                en: "Complete",
                jp: "終了します。",
                it: "Completata",
                de: "Abgeschlossen",
                es: "Completa",
                fr: "Terminé",
                nl: "Voltooid",
                pt: "Concluído",
                ru: "Выполнена"
            },
            Data: {
                "zh-cn": "飞行数据",
                en: "Flight Data"
            },
            EnterSDcardmode: {
                "zh-cn": "进入SD卡模式",
                en: "Enter SD Card Mode",
                jp: "SDカードモードに入ります。 ",
                it: "Entrare in modalità scheda SD",
                de: "SD-Karten-Modus aktivieren",
                es: "Entrar en modo de tarjeta SD",
                fr: "Activer le mode carte SD",
                nl: "SD-kaartmodus inschakelen",
                pt: "Entrar no modo de cartão SD",
                ru: "Войдите в режим карты SD"
            },
            Unit: {
                "zh-cn": "单位",
                en: "Unit",
                jp: "単位",
                it: "Unità",
                de: "Einheit",
                es: "Unidad",
                fr: "Unité",
                nl: "Eenheid",
                pt: "Unidade",
                ru: "Единица измерения"
            },
            cm: {
                "zh-cn": "厘米",
                en: "cm",
                jp: "cm",
                it: "cm",
                de: "cm",
                es: "cm",
                fr: "cm",
                nl: "cm",
                pt: "cm",
                ru: "см"
            },
            mm: {
                "zh-cn": "毫米",
                en: "mm",
                jp: "mm",
                it: "mm",
                de: "mm",
                es: "mm",
                fr: "mm",
                nl: "mm",
                pt: "mm",
                ru: "мм"
            },
            Manual: {
                "zh-cn": "手动",
                en: "Manual",
                jp: "手動",
                it: "Manuale",
                de: "Manuell",
                es: "Manual",
                fr: "Manuel",
                nl: "Handleiding",
                pt: "Manual",
                ru: "Ручн."
            },
            BatCellNum: {
                "zh-cn": "电芯数量",
                en: "Battery Cells",
                jp: "バッテッリーセル",
                it: "Celle batteria",
                de: "Akku-Zellen",
                es: "Celdas de batería",
                fr: "Cellules de batterie",
                nl: "Accucellen",
                pt: "Células da bateria",
                ru: "Элементы аккумуляторной батареи"
            },
            Nothing: {
                "zh-cn": "仅LED闪烁报警",
                en: "Only LED Warning",
                jp: "LEDインジケーター警告のみ",
                it: "Indicatore LED solo avvertimento",
                de: "Warnung nur über LED-Statusanzeige",
                es: "Solo aviso de indicador de LED",
                fr: "Voyant LED (avertissement uniquement)",
                nl: "LED-indicator Alleen waarschuwing",
                pt: "Apenas aviso de indicador LED",
                ru: "Предупреждение только на светодиодном индикаторе"
            },
            simulator: {
                "zh-cn": "模拟器",
                en: "Simulator",
                jp: "シミュレーター",
                it: "Simulatore",
                de: "Simulator",
                es: "Simulador",
                fr: "Simulateur",
                nl: "Simulator",
                pt: "Simulador",
                ru: "Симулятор"
            },
            HFree: {
                "zh-cn": "H.Free",
                en: "H.Free",
                jp: "H.Free",
                it: "H.Free",
                de: "H.Free",
                es: "H.Free",
                fr: "H.Free",
                nl: "H.Free",
                pt: "H.Free",
                ru: "H.Free"
            },
            HTrace: {
                "zh-cn": "H.Trace",
                en: "H.Trace",
                jp: "H.Trace",
                it: "H.Trace",
                de: "H.Trace",
                es: "H.Trace",
                fr: "H.Trace",
                nl: "H.Trace",
                pt: "H.Trace",
                ru: "H.Trace"
            },
            modeReset: {
                "zh-cn": "重置",
                en: "Reset",
                jp: "リセット",
                it: "Reset",
                de: "Zurücksetzen",
                es: "Reset",
                fr: "Réinitialiser",
                nl: "Resetten",
                pt: "Reiniciar",
                ru: "Сброс"
            },
            shut: {
                "zh-cn": "关闭",
                en: "Shut",
                jp: "停止します。",
                it: "Spegnere",
                de: "Schließen",
                es: "Cerrado",
                fr: "Fermer",
                nl: "Afsluiten",
                pt: "Fechado",
                ru: "Выключить"
            },
            Downward: {
                "zh-cn": "向下",
                en: "Downward",
                jp: "下向",
                it: "Verso il basso",
                de: "Nach unten",
                es: "Inferior",
                fr: "Vers le bas",
                nl: "Omlaag",
                pt: "Para baixo",
                ru: "Вниз"
            },
            aux: {
                "zh-cn": "aux",
                en: "aux",
                jp: "aux",
                it: "aux",
                de: "aux",
                es: "aux",
                fr: "aux",
                nl: "aux",
                pt: "aux",
                ru: "aux"
            },
            setmaxalt: {
                "zh-cn": "设置最高飞行高度",
                en: "Set Maximum Flight Altitude",
                jp: "最大飛行高度を設定します。",
                it: "Impostare l'altitudine di volo massima",
                de: "Maximale Flughöhe einstellen",
                es: "Establecer altitud de vuelo máxima",
                fr: "Définir l'altitude de vol maximale",
                nl: "Maximale vlieghoogte instellen",
                pt: "Definir altitude máxima de voo",
                ru: "Настроить максимальную высоту полета"
            },
            setmaxdistance: {
                "zh-cn": "设置最远飞行距离",
                en: "Set Maximum Flight Distance",
                jp: "最大飛行距離を設定します。",
                it: "Impostare la distanza di volo massima",
                de: "Maximale Flugstrecke einstellen",
                es: "Establecer distancia de vuelo máxima",
                fr: "Définir la distance de vol maximale",
                nl: "Maximale vliegafstand instellen",
                pt: "Definir distância máxima de voo",
                ru: "Настроить максимальное расстояние полета"
            },
            setlowflight: {
                "zh-cn": "设置最低飞行高度",
                en: "Set Minimum Flight Altitude",
                jp: "最低飛行高度を設定します。",
                it: "Impostare l'altitudine di volo minima",
                de: "Minimale Flughöhe einstellen",
                es: "Establecer altitud de vuelo mínima",
                fr: "Définir l'altitude de vol minimale",
                nl: "Minimale vlieghoogte instellen",
                pt: "Definir altitude mínima de voo",
                ru: "Настроить минимальную высоту полета"
            },
            Advanced: {
                "zh-cn": "高级",
                en: "Advanced",
                jp: "詳細",
                it: "Avanzate",
                de: "Weitergehende Fragen",
                es: "Avanzado",
                fr: "Avancé",
                nl: "Geavanceerd",
                pt: "Avançado",
                ru: "Расширенные настройки"
            },
            NewtoDJI: {
                "zh-cn": "首次使用DJI产品？",
                en: "New to DJI Product?",
                jp: "DJIは初めてですか?",
                it: "Primo utilizzo di un prodotto DJI?",
                de: "Neu bei DJI?",
                es: "¿Es su primer producto DJI?",
                fr: "Vous venez d'acquérir un produit DJI ?",
                nl: "Nog niet bekend met dit DJI-product?",
                pt: "Novo no produto DJI?",
                ru: "Вы не знакомы с продукцией DJI?"
            },
            insdcard_desc: {
                "zh-cn": "重启A3以退出SD卡模式。",
                en: "Restart A3 to exit SD Card Mode.",
                jp: " A3を再起動してSDカードモードを終了します。",
                it: "Riavviare A3 per uscire dalla modalità Scheda SD",
                de: "A3 neu starten, um SD-Karten-Modus zu verlassen.",
                es: "Reinicie A3 para salir del modo de tarjeta SD.",
                fr: "Redémarrez l'A3 pour quitter le mode carte SD.",
                nl: "Start A3 opnieuw om de SD-kaartmodus te verlaten.",
                pt: "Reiniciar A3 para sair de modo de cartão SD.",
                ru: "Для выхода из режима карты SD перезапустите A3."
            },
            lostconnect_desc: {
                "zh-cn": "连接断开，请检查A3与电脑主机的连接是否正常。",
                en: "Connection Lost. Ensure the flight controller is connected to your computer.",
                jp: "接続が切れています。フライトコントローラーがコンピューターに接続されていることを確認してください。",
                it: "Connessione interrotta Assicurarsi che il dispositivo di controllo del volo sia collegato al computer.",
                de: "Verbindung unterbrochen. Sicherstellen, dass die Flugsteuerung mit dem Computer verbunden ist.",
                es: "Conexión perdida. Asegúrese de que el controlador de vuelo está conectado a su ordenador.",
                fr: "Connexion interrompue. Assurez-vous que le contrôleur de vol est connecté à votre ordinateur.",
                nl: "Verbinding verbroken. Zorg ervoor dat de vluchtcontroller is aangesloten op uw computer.",
                pt: "Ligação perdida. Certifique-se de que o controlador de voo está ligado ao seu computador.",
                ru: "Потеряно соединение. Убедитесь в том, что пульт управления подключен к компьютеру."
            },
            websimulator: {
                "zh-cn": "模拟器",
                en: "Simulator",
                jp: "シミュレーター",
                it: "Simulatore",
                de: "Simulator",
                es: "Simulador",
                fr: "Simulateur",
                nl: "Simulator",
                pt: "Simulador",
                ru: "Симулятор"
            },
            Attitude: {
                "zh-cn": "姿态",
                en: "Attitude",
                jp: "姿勢",
                it: "Assetto",
                de: "Fluglage",
                es: "Actitud",
                fr: "Altitude",
                nl: "Houding",
                pt: "Atitude",
                ru: "Пространственное положение"
            },
            REAL_GROUND: {
                "zh-cn": "大地坐标系下融合数据",
                en: "Ground Frame Fusion Data",
                jp: "地上融合データ",
                it: "Dati di fusione sistema di riferimento terrestre",
                de: "Fusionsdaten Geo-Koordinatensystem",
                es: "Datos de fusión de coordenadas geodésicas",
                fr: "Données de fusion de cadre (sol)",
                nl: "Samenvoegingsgegevens grondmassa",
                pt: "Fusão de dados de coordenadas geodésicas",
                ru: "Объединение данных по геодезическим координатам"
            },
            REAL_BODY: {
                "zh-cn": "机体坐标系下融合数据",
                en: "Body Frame Fusion Data",
                jp: "機体融合データ",
                it: "Dati di Fusione del Corpo del Velivolo",
                de: "Fusionsdaten Flugwerk-Koordinatensystem",
                es: "Datos de fusión de chasis",
                fr: "Données de fusion de cadre (corps)",
                nl: "Samenvoegingsgegevens carrosserie",
                pt: "Fusão de dados da estrutura na caixa",
                ru: "Объединение данных по летательному аппарату"
            },
            RAW: {
                "zh-cn": "原始数据",
                en: "Raw Data",
                jp: "生データ",
                it: "Dati raw",
                de: "Rohdaten",
                es: "Datos sin formato",
                fr: "Données brutes",
                nl: "Ruwe gegevens",
                pt: "Dados em bruto",
                ru: "Необработанные данные"
            },
            ALTI_PRESS: {
                "zh-cn": "相对起飞点的高度数据",
                en: "Altitude to Home Point",
                jp: "ホームポイントまでの高度",
                it: "Altitudine all'Home Point",
                de: "Höhe bis Startpunkt",
                es: "Altitud hasta punto de origen",
                fr: "Altitude vers le point de départ",
                nl: "Hoogte tot basis",
                pt: "Altitude até à posição inicial",
                ru: "Высота возврата к домашней точки"
            },
            REL_US: {
                "zh-cn": "超声模块高度数据",
                en: "Ultrasonic Data",
                jp: "超音波データ",
                it: "Dati ultrasuoni",
                de: "Ultraschalldaten",
                es: "Datos de ultrasonidos",
                fr: "Données Ultrasonic",
                nl: "Ultrasone gegevens",
                pt: "Dados ultrassónicos",
                ru: "Данные о высоте от ультразвукового модуля"
            },
            InnerIMU: {
                "zh-cn": "内置IMU",
                en: "Inner IMU",
                jp: "内蔵 IMU",
                it: "IMU interna",
                de: "Interne IMU",
                es: "IMU interna",
                fr: "IMU interne",
                nl: "Binnenste IMU",
                pt: "IMU interior",
                ru: "Внутренний IMU"
            },
            ExIMU: {
                "zh-cn": "外置IMU",
                en: "Ex IMU",
                jp: "外付けIMU",
                it: "IMU esterna",
                de: "Ext. IMU",
                es: "IMU externa",
                fr: "IMU Ex",
                nl: "Ex. IMU",
                pt: "IMU ext",
                ru: "Внешний IMU"
            },
            totalFlightTime: {
                "zh-cn": "飞行总时间",
                en: "Total Flight Time",
                jp: "総飛行時間",
                it: "Tempo di volo totale",
                de: "Gesamtflugzeit",
                es: "Tiempo de vuelo total",
                fr: "Temps de vol total",
                nl: "Totale vliegtijd",
                pt: "Tempo total de voo",
                ru: "Общее время полета"
            },
            totalFlightDistance: {
                "zh-cn": "飞行总里程",
                en: "Total Flight Distance",
                jp: "総飛行距離",
                it: "Distanza di volo totale",
                de: "Gesamtflugstrecke",
                es: "Distancia de vuelo total",
                fr: "Distance de vol totale",
                nl: "Totale vliegafstand",
                pt: "Distância total de voo",
                ru: "Общее расстояние полета"
            },
            flightTimes: {
                "zh-cn": "飞行次数",
                en: "Flight Times",
                jp: "飛行時間",
                it: "Tempi di volo",
                de: "Flugzeiten",
                es: "Tiempos de vuelo",
                fr: "Temps de vol",
                nl: "Vluchttijden",
                pt: "Horas de voo",
                ru: "Время полета"
            },
            saveToLocal: {
                "zh-cn": "保存到本地",
                en: "Save To Local",
                jp: "ローカルに保存します。",
                it: "Salva in locale",
                de: "Lokal speichern",
                es: "Guardar localmente",
                fr: "Enregistrer en local",
                nl: "Lokaal opslaan",
                pt: "Guardar no local",
                ru: "Сохранить на локальный носитель"
            },
            date: {
                "zh-cn": "日期",
                en: "Date",
                jp: "日付",
                it: "Data",
                de: "Datum",
                es: "Fecha",
                fr: "Date",
                nl: "Datum",
                pt: "Data",
                ru: "Дата"
            },
            fileName: {
                "zh-cn": "文件名",
                en: "File Name",
                jp: "ファイル名",
                it: "Nome file",
                de: "Dateiname",
                es: "Nombre de archivo",
                fr: "Nom du fichier",
                nl: "Bestandsnaam",
                pt: "Nome do ficheiro",
                ru: "Имя файла"
            },
            fileSize: {
                "zh-cn": "大小",
                en: "File Size",
                jp: "ファイルサイズ",
                it: "Dimensione file",
                de: "Dateigröße",
                es: "Tamaño de archivo",
                fr: "Taille du fichier",
                nl: "Bestandsgrootte",
                pt: "Tamanho do Ficheiro",
                ru: "Размер файла"
            },
            fcFile: {
                "zh-cn": "飞控文件",
                en: "Flight Control File",
                jp: "FCファイル",
                it: "File di controllo volo",
                de: "Datei Flugsteuerung",
                es: "Archivo de control de vuelo",
                fr: "Fichier de contrôle de vol",
                nl: "Bestand vluchtregeling",
                pt: "Ficheiro do controlo de voo",
                ru: "Файл управления полетом"
            },
            visionFile: {
                "zh-cn": "视觉文件",
                en: "Vision Module File",
                jp: "ビジョンモデュ―ルファイル",
                it: "File modulo di visione",
                de: "Datei Positionsbestimmungsmodul",
                es: "Archivo de módulo de visión",
                fr: "Fichier du module de vision",
                nl: "Bestand visiemodule",
                pt: "Ficheiro do módulo de visão",
                ru: "Файл модуля Vision"
            },
            startCalibration: {
                "zh-cn": "开始标定",
                en: "Calibrate Now",
                jp: "キャリブレーションを開始します。",
                it: "Avviare la calibrazione",
                de: "Kalibrierung starten",
                es: "Iniciar calibración",
                fr: "Lancer l'étalonnage",
                nl: "Kalibratie starten",
                pt: "Iniciar calibragem",
                ru: "Начать калибровку"
            },
            flightLog: {
                "zh-cn": "飞行数据",
                en: "Flight Data"
            },
            p4calibration: {
                "zh-cn": "标定",
                en: "Calibrate",
                jp: "キャリブレーション",
                it: "Calibrazione",
                de: "Kalibrierung",
                es: "Calibración",
                fr: "Étalonnage",
                nl: "Kalibratie",
                pt: "Calibragem",
                ru: "Калибровка"
            },
            Aileron: {
                "zh-cn": "横滚",
                en: "Aileron",
                jp: "補助翼",
                it: "Alettone",
                de: "Querruder",
                es: "Alerón",
                fr: "Aileron",
                nl: "Rolroer",
                pt: "Aileron",
                ru: "Элерон"
            },
            Elevator: {
                "zh-cn": "油门",
                en: "Elevator",
                jp: "昇降舵",
                it: "Elevatore",
                de: "Höhenruder",
                es: "Elevador",
                fr: "Élévateur",
                nl: "Hoogteroer",
                pt: "Leme de profundidade",
                ru: "Руль высоты"
            },
            Rudder: {
                "zh-cn": "航向",
                en: "Rudder",
                jp: "方向舵",
                it: "Timone",
                de: "Seitenruder",
                es: "Timón",
                fr: "Dérive",
                nl: "Roer",
                pt: "Leme de direção",
                ru: "Руль направления"
            },
            AileronandElevator: {
                "zh-cn": "俯仰与横滚",
                en: "Pitch and Roll",
                jp: "ピッチとロール",
                it: "Beccheggio e rollio",
                de: "Nicken und Rollen",
                es: "Cabeceo y alabeo",
                fr: "Tangage et roulis",
                nl: "Hellen en rollen",
                pt: "Passo e rotação",
                ru: "Тангаж и крен"
            },
            rcali1: {
                "zh-cn": "请将所有摇杆与开关调整至中间位置。",
                en: "Move all sticks and switch to center position.",
                jp: "図に示すように、すべてのコントロールスティックとスイッチを中間位置まで動かします。",
                it: "Muovere tutti gli stick e gli interruttori in posizione centrale, come illustrato nella figura. ------",
                de: "Alle Steuerhebel und Schalter in die Mitte stellen (siehe Abb.). ------",
                es: "Mueva todas las palancas e interruptores a la posición intermedia como se muestra en la figura. ------",
                fr: "Placez tous les manches et commutateurs en position intermédiaire, comme illustré sur la figure correspondante. ------",
                nl: "Plaats alle sticks en schakelaars naar de middenpositie zoals afgebeeld. ------",
                pt: "Afastar todos os interruptores e manches para a posição do ponto médio conforme ilustrado na Fig. ------",
                ru: "Переведите все рычажки управления и переключатели в среднее положение, как показано на рисунке. ------"
            },
            rcali2: {
                "zh-cn": "将摇杆和开关拨动至最大和最小位置，确认遥控器摇杆行程正确之后点击完成按钮完成校准",
                en: "Push sticks and switches to their maximum and minimum positions to confirm remote controller stick range then click Complete to finish calibration."
            },
            failsafetips: {
                "zh-cn": "* 选择失控返航时的机头方向: 朝向返航点 / 背向返航点",
                en: "* Choose Failsafe Return-to-Home heading: Face/ Back to Home Point。",
                jp: "*フェイルセーフRTH進行方を選択します：ホームポイント方向へ／ホームポイントに戻る",
                it: "* Scegliere la direzione del Fail safe Return To Home: Verso l'Home Point/verso la parte opposta dell'Home Point",
                de: "* Kursrichtung für Rückkehrflug wählen Zum Startpunkt / Weg vom Startpunkt",
                es: "* Elija rumbo Regreso al punto de origen de seguridad: Hacia el punto de origen / Orientación opuesta al punto de origen",
                fr: "* Sélectionnez l'orientation de retour au point de départ sécurisé (Failsafe) : Vers le point de départ/Opposé au point de départ",
                nl: "* Kies koers voor Uitvalbeveiliging Return-to-Home: Naar de basis / Van de basis af gericht",
                pt: "* Escolher rumo para Voltar à posição inicial com proteção contra falhas: Em direção à posição inicial/Na direção contrária à posição inicial",
                ru: "* Выберите курс возврата домой в аварийном режиме: К домашней точке / В сторону от домашней точки"
            },
            Healthy: {
                "zh-cn": "系统正常",
                en: "Healthy",
                jp: "正常",
                it: "Sano",
                de: "Einwandfrei",
                es: "Correcto",
                fr: "Opérationnel",
                nl: "Goed",
                pt: "Saudável",
                ru: "Исправен"
            },
            SuggesttodoIMUCheck: {
                "zh-cn": "建议检查IMU状态",
                en: "Check IMU Status",
                jp: " IMU ステータスを確認してください。",
                it: "Controllare stato IMU",
                de: "IMU-Status prüfen",
                es: "Comprobar estado de IMU",
                fr: "Vérifier l'état de l'IMU",
                nl: "IMU-status controleren",
                pt: "Verificar estado da IMU",
                ru: "Проверить статус IMU"
            },
            IMUSetting: {
                "zh-cn": "IMU 设置",
                en: "IMU Settings"
            },
            IMUCalibration: {
                "zh-cn": "IMU 校准",
                en: "IMU Calibration",
                jp: " IMU キャリブレーション",
                it: "Calibrazione IMU",
                de: "IMU-Kalibrierung",
                es: "Calibración de IMU",
                fr: "Étalonnage de l'IMU",
                nl: "IMU-kalibratie",
                pt: "Calibragem da IMU",
                ru: "Калибровка IMU"
            },
            current: {
                "zh-cn": "当前",
                en: "Current",
                jp: "電流",
                it: "Attuale",
                de: "Aktuell",
                es: "Actual",
                fr: "Courant",
                nl: "Huidige",
                pt: "Atual",
                ru: "Текущий"
            },
            Bias: {
                "zh-cn": "偏移",
                en: "Bias",
                jp: "バイアス",
                it: "Polarizzazione",
                de: "Blendenöffnung",
                es: "Sesgo",
                fr: "Exposition",
                nl: "Bias",
                pt: "Polarização",
                ru: "Смещение"
            },
            backup: {
                "zh-cn": "备份",
                en: "Backup",
                jp: "バックアップ",
                it: "Backup",
                de: "Sicherung",
                es: "Copia de seguridad",
                fr: "Sauvegarde",
                nl: "Back-up",
                pt: "Cópia de segurança",
                ru: "Резервный"
            },
            compass: {
                "zh-cn": "指南针",
                en: "Compass",
                jp: "コンパス",
                it: "Bussola",
                de: "Kompass",
                es: "Brújula",
                fr: "Compas",
                nl: "Kompas",
                pt: "Bússola",
                ru: "Компас"
            },
            cpsMod: {
                "zh-cn": "超模量",
                en: "Mod",
                jp: "Mod",
                it: "Mod",
                de: "Mod",
                es: "Mod",
                fr: "Mod.",
                nl: "Mod",
                pt: "Mod",
                ru: "Модуль"
            },
            gimbalnotice: {
                "zh-cn": "使用该项功能前请先连接云台。",
                en: "Connect Gimbal before enabling this function.",
                jp: "機能をオンにする前にジンバルに接続してください。",
                it: "Collegare gimbal prima di attivare questa funzione.",
                de: "Funktion erst einschalten, nachdem Gimbal angeschlossen wurde.",
                es: "Conecte el gimbal antes de encender esta función.",
                fr: "Connectez la nacelle avant d'activer cette fonction.",
                nl: "Sluit de gimbal aan voordat u deze functie inschakelt.",
                pt: "Conecte a suspensão cardã antes de ligar esta função.",
                ru: "Перед тем как включить эту функцию, подсоедините подвес."
            },
            gearnotice: {
                "zh-cn": "连接起落架至图示位置。",
                en: "Connect Landing Gear as Fig. shown.",
                jp: "図に示すように、ギアを主コントローラーに接続します。",
                it: "Collegare il carrello di atterraggio come illustrato nella Fig.",
                de: "Landegestell wie in der Abb. anschließen.",
                es: "Conecte el tren de aterrizaje según la figura.",
                fr: "Connectez le train d'atterrissage comme illustré sur la figure correspondante.",
                nl: "Sluit het landingsgestel aan zoals afgebeeld.",
                pt: "Conecte o trem de aterragem conforme ilustrado na Fig.",
                ru: "Подсоедините шасси, как показано на рисунке."
            },
            SimulatorLite: {
                "zh-cn": "模拟器 Lite",
                en: "Simulator Lite",
                jp: "シミュレーターLite",
                it: "Simulator Lite",
                de: "Simulator Lite",
                es: "Simulator Lite",
                fr: "Simulator Lite",
                nl: "Simulator Lite",
                pt: "Simulator Lite",
                ru: "Симулятор, версия Lite"
            },
            Open: {
                "zh-cn": "打开",
                en: "Open",
                jp: "開きます。",
                it: "Apri",
                de: "Öffnen",
                es: "Abrir",
                fr: "Ouvrir",
                nl: "Openen",
                pt: "Aberto",
                ru: "Открыть"
            },
            About: {
                "zh-cn": "关于",
                en: "About",
                jp: "詳細",
                it: "Informazioni",
                de: "Info",
                es: "Acerca de",
                fr: "A propos",
                nl: "Info",
                pt: "Sobre",
                ru: "О программе"
            },
            SimulatorAbout: {
                "zh-cn": "欢迎使用模拟器。模拟器可传输飞行器模拟的参数，在PC端实现飞行器的3D虚拟显示。",
                en: "Welcome to the Simulator. The simulator creates a virtual 3D environment from flight data transmitted to the PC.",
                jp: "シミュレーターは、PCに伝送されたフライトデータから仮想の３D環境を構築します。",
                it: "Benvenuti nel simulatore. Il simulatore crea un ambiente 3CD virtuale con i dati di volo trasmessi al PC.",
                de: "Willkommen beim Simulator. Der Simulator generiert eine virtuelle 3D-Umgebung aus den auf den PC übertragenen Flugdaten.",
                es: "Bienvenidos al simulador El simulador crea un entorno virtual en 3D a partir de datos de vuelo transmitidos al PC.",
                fr: "Bienvenue dans le simulateur. Le simulateur crée un environnement virtuel 3D à partir des données de vol transmises à l'ordinateur.",
                nl: "Welkom bij de simulator. De simulator creëert een virtuele 3D-omgeving op basis van vluchtgegevens die naar de pc worden gestuurd.",
                pt: "Bem-vindo ao simulador. O simulador cria um ambiente virtual 3D a partir dos dados de voo transmitidos para o PC",
                ru: "Добро пожаловать в симулятор. Симулятор создает виртуальную трехмерную среду на основе полетных данных, переданных в ПК."
            },
            Version: {
                "zh-cn": "版本",
                en: "Version",
                jp: "バージョン",
                it: "Versione",
                de: "Version",
                es: "Versión",
                fr: "Version",
                nl: "Versie",
                pt: "Versão",
                ru: "Версия"
            },
            SimulatorSetting: {
                "zh-cn": "模拟器设置",
                en: "Simulator Settings",
                jp: "シミュレーター設定",
                it: "Impostazioni simulatore",
                de: "Simulatoreinstellungen",
                es: "Ajustes del simulador",
                fr: "Paramètres du simulateur",
                nl: "Simulatorinstellingen",
                pt: "Definições do simulador",
                ru: "Настройки симулятора"
            },
            Latitude: {
                "zh-cn": "纬度",
                en: "Latitude",
                jp: "緯度",
                it: "Latitudine",
                de: "Breitengrad",
                es: "Latitud",
                fr: "Latitude",
                nl: "Breedtegraad",
                pt: "Latitude",
                ru: "Широта"
            },
            Longitude: {
                "zh-cn": "经度",
                en: "Longitude",
                jp: "経度",
                it: "Longitudine",
                de: "Längengrad",
                es: "Longitud",
                fr: "Longitude",
                nl: "Lengtegraad",
                pt: "Longitude",
                ru: "Долгота"
            },
            Frequency: {
                "zh-cn": "频率",
                en: "Frequency",
                jp: "周波数",
                it: "Frequenza",
                de: "Frequenz",
                es: "Frecuencia",
                fr: "Fréquence",
                nl: "Frequentie",
                pt: "Frequência",
                ru: "Частота"
            },
            considerground: {
                "zh-cn": "考虑地面",
                en: "Ground Enabled",
                jp: "Groundが有効になっています。",
                it: "Terra attivata",
                de: "Boden aktiviert",
                es: "Suelo activado",
                fr: "Sol activé",
                nl: "Massa ingeschakeld",
                pt: "Ativado no solo",
                ru: "Земная система координат активирована"
            },
            notconsiderground: {
                "zh-cn": "不考虑地面",
                en: "Ground disabled",
                jp: "Groundが無効になっています。",
                it: "Terra disattivata",
                de: "Boden deaktiviert",
                es: "Suelo desactivado",
                fr: "Sol désactivé",
                nl: "Massa uitgeschakeld",
                pt: "Desativado no solo",
                ru: "Земная система координат деактивирована"
            },
            startemulating: {
                "zh-cn": "开始仿真",
                en: "Start Simulating",
                jp: "シミュレーションを開始します。",
                it: "Avviare simulazione",
                de: "Simulation starten",
                es: "Iniciar simulación",
                fr: "Lancer la simulation",
                nl: "Simulatie starten",
                pt: "Iniciar simulação",
                ru: "Начать симуляцию"
            },
            stopemulating: {
                "zh-cn": "停止仿真",
                en: "Stop Simulating",
                jp: "シミュレーションを停止「します。",
                it: "Interrompere simulazione",
                de: "Simulation beenden",
                es: "Detener simulación",
                fr: "Arrêter la simulation",
                nl: "Simulatie stoppen",
                pt: "Parar simulação",
                ru: "Остановить симуляцию"
            },
            forcemoment: {
                "zh-cn": "力和力矩",
                en: "Force and Force Moment",
                jp: "力と力のモーメント",
                it: "Forza e momento della forza",
                de: "Kraft und Kraftmoment",
                es: "Fuerza y momento de fuerza",
                fr: "Force et moment de force",
                nl: "Kracht en krachtmomentum",
                pt: "Força e momento da força",
                ru: "Сила и момент силы"
            },
            set: {
                "zh-cn": "设置",
                en: "Settings",
                jp: "設定",
                it: "Impostazioni",
                de: "Einstellungen",
                es: "Ajustes",
                fr: "Réglages",
                nl: "Instellingen",
                pt: "Definições",
                ru: "Настройки"
            },
            get: {
                "zh-cn": "获取",
                en: "Get",
                jp: "取得します。",
                it: "Ottieni",
                de: "Abrufen",
                es: "Obtener",
                fr: "Obtenir",
                nl: "Haal",
                pt: "Obter",
                ru: "Получить"
            },
            craftStatus: {
                "zh-cn": "飞机状态",
                en: "Aircraft Status",
                jp: "機体のステータス",
                it: "Stato del velivolo",
                de: "Drohnenstatus",
                es: "Estado de la aeronave",
                fr: "État de l'appareil",
                nl: "Status luchtvaartuig",
                pt: "Estado da aeronave",
                ru: "Состояние летательного аппарата"
            },
            momentum: {
                "zh-cn": "冲量",
                en: "Momentum",
                jp: "推進力",
                it: "Quantità di moto",
                de: "Moment",
                es: "Momento",
                fr: "Élan",
                nl: "Momentum",
                pt: "Quantidade de movimento",
                ru: "Инерция"
            },
            wind_speed: {
                "zh-cn": "风速",
                en: "Wind Speed",
                jp: "風速",
                it: "Velocità del vento",
                de: "Windgeschwindigkeit",
                es: "Velocidad de viento",
                fr: "Vitesse du vent",
                nl: "Windsnelheid",
                pt: "Velocidade do vento",
                ru: "Скорость ветра"
            },
            real_time_wind_speed: {
                "zh-cn": "实时风速",
                en: "Realtime",
                jp: "リアルタイム",
                it: "Tempo reale",
                de: "Echtzeit",
                es: "Tiempo real",
                fr: "Temps réel",
                nl: "Real-time",
                pt: "Em tempo real",
                ru: "Режим реального времени"
            },
            init_wind_speed: {
                "zh-cn": "初始化风速",
                en: "Initial Wind Speed",
                jp: "初速",
                it: "Iniziale",
                de: "Anfang",
                es: "Inicial",
                fr: "Initial",
                nl: "Begin",
                pt: "Inicial",
                ru: "Начальн."
            },
            simulator_area: {
                "zh-cn": "机体面积",
                en: "Surface Area of the Aircraft",
                jp: "機体表面積",
                it: "Area superficiale del velivolo",
                de: "Oberfläche der Drohne",
                es: "Superficie de la aeronave",
                fr: "Surface de l'appareil",
                nl: "Oppervlakte van het luchtvaartuig",
                pt: "Área da superfície da aeronave",
                ru: "Площадь поверхности летательного аппарата"
            },
            frictionfactors: {
                "zh-cn": "空气密度、阻力系数",
                en: "Air Density",
                jp: "空気密度",
                it: "Densità dell'aria",
                de: "Luftdichte",
                es: "Densidad del aire",
                fr: "Densité de l'air",
                nl: "Luchtdichtheid",
                pt: "Densidade do ar",
                ru: "Плотность воздуха"
            },
            realtimesetting: {
                "zh-cn": "实时设置",
                en: "Real Time Settings",
                jp: "リアルタイム設定",
                it: "Impostazioni in tempo reale",
                de: "Echtzeiteinstellungen",
                es: "Ajustes en tiempo real",
                fr: "Paramètres en temps réel",
                nl: "Real-time instellingen",
                pt: "Definições de tempo real",
                ru: "Настройки режима реального времени"
            },
            initsetting: {
                "zh-cn": "初始设置",
                en: "Initial Settings",
                jp: "初期設定",
                it: "Impostazioni iniziali",
                de: "Anfangseinstellungen",
                es: "Ajustes iniciales",
                fr: "Paramètre initiaux",
                nl: "Begininstellingen",
                pt: "Definições iniciais",
                ru: "Начальные настройки"
            },
            temperature: {
                "zh-cn": "温度",
                en: "Temperature",
                jp: "温度",
                it: "Temperatura",
                de: "Temperatur",
                es: "Temperatura",
                fr: "Température",
                nl: "Temperatuur",
                pt: "Temperatura",
                ru: "Температура"
            },
            gravity: {
                "zh-cn": "重力",
                en: "Gravity",
                jp: "G力",
                it: "Gravità",
                de: "Schwerkraft",
                es: "Gravedad",
                fr: "Gravité",
                nl: "Zwaartepunt",
                pt: "Gravidade",
                ru: "Сила тяжести"
            },
            simulatorCrash: {
                "zh-cn": "炸机",
                en: "Crash",
                jp: "衝突",
                it: "Impatto",
                de: "Absturz",
                es: "Colisión",
                fr: "Crash",
                nl: "Crash",
                pt: "Colisão",
                ru: "Авария"
            },
            recoveroutput: {
                "zh-cn": "恢复动力输出",
                en: "Restore Motor Output",
                jp: "モーター出力を回復します。",
                it: "Ripristinare potenza motore",
                de: "Motorleistung auf Standard einstellen",
                es: "Restaurar salida de motor",
                fr: "Restaurer la sortie moteur",
                nl: "Motoruitvoer herstellen",
                pt: "Restaurar potência do motor",
                ru: "Восстановить начальное значение выходной мощности двигателя"
            },
            closeoutput: {
                "zh-cn": "关闭动力输出",
                en: "Turn off Motor Output",
                jp: "モーター出力を遮断します。",
                it: "Disattivare potenza motore",
                de: "Motorleistung abschalten",
                es: "Apagar salida de motor",
                fr: "Désactiver la sortie moteur",
                nl: "Motoruitvoer uitschakelen",
                pt: "Desligar potência do motor",
                ru: "Отключить выходную мощность двигателя"
            },
            arm_length: {
                "zh-cn": "机臂长度",
                en: "Airframe Arm Length",
                jp: "機体のアーム長",
                it: "Lunghezza braccio velivolo",
                de: "Armlänge",
                es: "Longitud de brazo de la estructura de aeronave",
                fr: "Longueur du bras de la cellule",
                nl: "Armlengte casco",
                pt: "Comprimento de braço da célula",
                ru: "Длина корпуса летательного аппарата"
            },
            simulatorfreeze: {
                "zh-cn": "飞机位置、速度、姿态",
                en: "Coordinate, Velocity and Attitude",
                jp: "座標、速度、姿勢",
                it: "Coordinate, velocità e assetto",
                de: "Koordinate, Geschwindigkeit und Fluglage",
                es: "Coordenada, velocidad y actitud",
                fr: "Coordonnées, vélocité et altitude",
                nl: "Coördinaten, snelheid en houding",
                pt: "Coordenadas, velocidade e atitude",
                ru: "Координата, скорость и пространственное положение"
            },
            unlock: {
                "zh-cn": "解锁",
                en: "Unlock",
                jp: "ロックを解除します。",
                it: "Sbloccare",
                de: "Entsperren",
                es: "Desbloquear",
                fr: "Déverrouiller",
                nl: "Ontgrendelen",
                pt: "Desbloquear",
                ru: "Разблокировать"
            },
            simulatorgofreeze: {
                "zh-cn": "锁定飞机位置／速度／姿态",
                en: "Lock Coordinate, Velocity and Attitude",
                jp: "座標、速度、姿勢を固定します。",
                it: "Bloccare coordinate, velocità e assetto",
                de: "Koordinate, Geschwindigkeit und Fluglage sperren",
                es: "Bloquear Coordenada, velocidad y actitud",
                fr: "Verrouiller les coordonnées, la vélocité et l'altitude",
                nl: "Coördinaten, snelheid en houding vergrendelen",
                pt: "Bloquear coordenadas, velocidade e atitude",
                ru: "Заблокировать координату, скорость и пространственное положение"
            },
            mass_inertia: {
                "zh-cn": "质量、转动惯量",
                en: "Mass and Inertia",
                jp: "質量と慣性",
                it: "Massa e inerzia",
                de: "Masse und Trägheit",
                es: "Masa e inercia",
                fr: "Masse et inertie",
                nl: "Massa en traagheid",
                pt: "Massa e inércia",
                ru: "Масса и инерция"
            },
            const_kinc_dynamic: {
                "zh-cn": "作用到飞机的力、力矩或加速度、角加速度",
                en: "Force and Torque, or Accelation and Angular Accelation to the aircraft",
                jp: "機体に対する力と力のモーメントまたは加速と角速度",
                it: "Forza e coppia (torque), o accelerazione e accelerazione angolare rispetto al velivolo",
                de: "Kraft und Drehmoment, oder Beschleunigung und Winkelbeschleunigung",
                es: "Fuerza y par, o aceleración y aceleración angular de la aeronave",
                fr: "Force et couple ou accélération et accélération angulaire de l'appareil",
                nl: "Kracht en torsie, of versnelling en hoekversnelling naar het luchtvaartuig",
                pt: "Força e binário, ou aceleração e aceleração angular para a aeronave",
                ru: "Сила и крутящий момент или ускорение и угловое ускорение летательного аппарата"
            },
            kinc_dynamic1: {
                "zh-cn": "加速度和角加速度",
                en: "Accelation and Angular Accelation",
                jp: "加速と角速度",
                it: "Accelerazione e accelerazione angolare",
                de: "Beschleunigung und Winkelbeschleunigung",
                es: "Aceleración y aceleración angular",
                fr: "Accélération et accélération angulaire",
                nl: "Versnelling en hoekversnelling",
                pt: "Aceleração e aceleração angular",
                ru: "Ускорение и угловое ускорение"
            },
            varia_kinc_dynamic: {
                "zh-cn": "作用到飞机的力、力矩或加速度、角加速度或冲量、冲量矩，带时间限制",
                en: "Force, torque , accelation and angular accelation apply to the aircraft with time constrain",
                jp: "力、力のモーメント、加速、角速度が機体に適用されますが、時間の制約があります。",
                it: "Forza, coppia (torque),  accelerazione e accelerazione angolare si applicano al velivolo con limiti di tempo",
                de: "Kraft, Drehmoment, Beschleunigung und Winkelbeschleunigung gelten für die Drohne mit Zeitbeschränkung.",
                es: "Fuerza, par, aceleración y aceleración angular se aplican a la aeronave con restricción de tiempo",
                fr: "La force, le couple, l'accélération et l'accélération angulaire s'appliquent à l'appareil avec une limite de temps",
                nl: "Kracht, torsie, versnelling en hoekversnelling gelden voor het luchtvaartuig met tijdrestrictie",
                pt: "Força, binário, aceleração e aceleração angular aplicam-se à aeronave com restrição de tempo",
                ru: "Сила, момент, ускорение и угловое ускорение действуют на летательный аппарат ограниченное время"
            },
            getsimulatorfreq: {
                "zh-cn": "获取模型迭代频率",
                en: "Acquiring Model Iteration Frequency",
                jp: "繰り返し周波数モデルの取得",
                it: "Acquisizione frequenza di iterazione modello in corso",
                de: "Modell-Iterationsfrequenz wird geladen",
                es: "Adquiriendo frecuencia de iteración de modelo",
                fr: "Acquisition de la fréquence d'itération du modèle",
                nl: "Frequentie modeliteratie berekenen",
                pt: "A adquirir frequência de iteração de modelo",
                ru: "Частота повторения модели сбора данных"
            },
            toviewsimulatordata: {
                "zh-cn": "开始仿真以查看飞行器姿态",
                en: "Start Simulating to check airfraft attitude",
                jp: "シミュレーションを開始し、機体の姿勢を確認します。",
                it: "Avviare simulazione per controllare l'assetto del velivolo",
                de: "Simulation starten, um Flughöhe zu prüfen",
                es: "Iniciar simulación para comprobar actitud de la aeronave",
                fr: "Lancer la simulation pour vérifier l'altitude de l'appareil",
                nl: "Simulatie starten om hoogte luchtvaartuig te controleren",
                pt: "Iniciar simulação para verificar atitude da aeronave",
                ru: "Начать симуляцию, чтобы проверить пространственное положение летательного аппарата"
            },
            Tel: {
                "zh-cn": "电话",
                en: "TEL",
                jp: "電話",
                it: "TEL",
                de: "TEL.",
                es: "TEL",
                fr: "TÉL",
                nl: "TEL",
                pt: "TEL",
                ru: "Телефон"
            },
            Enablemultiplemode: {
                "zh-cn": "启用飞行模式切换",
                en: "Enable Multiple Flight Mode",
                jp: "複数モードを有効にします。",
                it: "Attivare Molteplici modalità di volo",
                de: "Multi-Flugmodus aktivieren",
                es: "Activar modo de vuelo múltiple",
                fr: "Activer les modes de vol multiples",
                nl: "Multi-vliegmodus inschakelen",
                pt: "Ativar vários modos de voo",
                ru: "Включить режим Multiple Flight"
            },
            Control: {
                "zh-cn": "控制",
                en: "Control",
                jp: "コントロール",
                it: "Controllo",
                de: "Steuerung",
                es: "Control",
                fr: "Contrôle",
                nl: "Bedienen",
                pt: "Controlo",
                ru: "Управление"
            },
            Exp: {
                "zh-cn": "操控EXP.",
                en: "Control EXP.",
                jp: "EXPをコントロールします。",
                it: "Controllo EXP.",
                de: "EXP steuern.",
                es: "Control EXP.",
                fr: "Contrôler l'EXP.",
                nl: "Bediening EXP.",
                pt: "Controlo EXP.",
                ru: "Управление EXP."
            },
            StickMonitor: {
                "zh-cn": "通道查看",
                en: "Stick Monitor",
                jp: "スティックモニター",
                it: "Stick del monitor",
                de: "Steuerhebelüberwachung",
                es: "Monitor de palanca",
                fr: "Surveillance du manche",
                nl: "Stickmonitor",
                pt: "Monitor de manches",
                ru: "Монитор рычажков"
            },
            ChooseReceiverType: {
                "zh-cn": "类型",
                en: "Choose Receiver Type",
                jp: "受信機タイプを選択します。",
                it: "Scegliere tipo di ricevitore",
                de: "Empfängertyp wählen",
                es: "Seleccionar tipo de receptor",
                fr: "Sélectionner le type de récepteur",
                nl: "Type ontvanger kiezen",
                pt: "Selecionar tipo de recetor",
                ru: "Выбрать тип приемника"
            },
            Safetyswitch: {
                "zh-cn": "紧急退出",
                en: "Flight Mode Reset",
                jp: "フライトモードリセット",
                it: "Reset Modalità di volo",
                de: "Flugmodus zurücksetzen",
                es: "Restablecimiento del modo de vuelo",
                fr: "Réinitialisation du mode de vol",
                nl: "Vluchtmodus resetten",
                pt: "Repor modo de voo",
                ru: "Сброс режима полета"
            },
            contactlink: {
                "zh-cn": "http://www.dji.com/cn/contact",
                en: "http://www.dji.com/contact",
                jp: "http://www.dji.com/contact",
                it: "http://www.dji.com/contact",
                de: "http://www.dji.com/contact",
                es: "http://www.dji.com/contact",
                fr: "http://www.dji.com/contact",
                nl: "http://www.dji.com/contact",
                pt: "http://www.dji.com/contact",
                ru: "http://www.dji.com/contact"
            },
            Atti: {
                "zh-cn": "Atti",
                en: "Atti",
                jp: "Atti",
                it: "Atti",
                de: "Atti",
                es: "Atti",
                fr: "Atti",
                nl: "Atti",
                pt: "Atti",
                ru: "Atti"
            },
            GPSAtti: {
                "zh-cn": "GPS Atti",
                en: "GPS Atti",
                jp: "GPS Atti",
                it: "GPS Atti",
                de: "GPS-Flugl.",
                es: "GPS Atti",
                fr: "GPS Atti",
                nl: "GPS-Atti",
                pt: "GPS Atti",
                ru: "GPS Atti"
            },
            GPS: {
                "zh-cn": "GPS",
                en: "GPS",
                jp: "GPS",
                it: "GPS",
                de: "GPS",
                es: "GPS",
                fr: "GPS",
                nl: "GPS",
                pt: "GPS",
                ru: "GPS"
            },
            FARM: {
                "zh-cn": "FARM",
                en: "FARM",
                jp: "FARM",
                it: "FARM",
                de: "FARM",
                es: "FARM",
                fr: "FARM",
                nl: "FARM",
                pt: "FARM",
                ru: "FARM"
            },
            Navigation: {
                "zh-cn": "Navigation",
                en: "Navigation",
                jp: "ナビゲーション",
                it: "Navigazione",
                de: "Navigation",
                es: "Navegación",
                fr: "Navigation",
                nl: "Navigatie",
                pt: "Navegação",
                ru: "Навигация"
            },
            API: {
                "zh-cn": "API",
                en: "API",
                jp: "API",
                it: "API",
                de: "API",
                es: "API",
                fr: "API",
                nl: "API",
                pt: "API",
                ru: "API"
            },
            unknownstatus: {
                "zh-cn": "未知状态",
                en: "Unknown",
                jp: "不明",
                it: "Sconosciuto",
                de: "Unbekannt",
                es: "Desconocido",
                fr: "Inconnu",
                nl: "Onbekend",
                pt: "Desconhecido",
                ru: "Неизвестно"
            },
            unconnect: {
                "zh-cn": "未连接",
                en: "Disconnected",
                jp: "接続が切断されています。",
                it: "Disconnesso",
                de: "Getrennt",
                es: "Desconectado",
                fr: "Déconnecté",
                nl: "Ontkoppeld",
                pt: "Desligado",
                ru: "Отключено"
            },
            Calibrating: {
                "zh-cn": "正在校准",
                en: "Calibrating",
                jp: "キャリブレーション中です。",
                it: "Calibrazione in corso",
                de: "Wird kalibriert",
                es: "Calibración",
                fr: "Étalonnage",
                nl: "Kalibreren",
                pt: "A calibrar",
                ru: "Калибровка"
            },
            califail: {
                "zh-cn": "校准失败",
                en: "Cali Failed",
                jp: "キャリブレーションに失敗しました。",
                it: "Calibrazione non riuscita",
                de: "Kal. fehlgeschlagen",
                es: "La calib. ha fallado",
                fr: "Échec de l'étalonnage",
                nl: "Kali mislukt",
                pt: "A calibr. falhou",
                ru: "Сбой калибровки"
            },
            dataerror: {
                "zh-cn": "数据异常",
                en: "Data Error",
                jp: "データエラー",
                it: "Errore dati",
                de: "Datenfehler",
                es: "Error de datos",
                fr: "Erreur de données",
                nl: "Gegevensfout",
                pt: "Erro de dados",
                ru: "Ошибка в данных"
            },
            warmup: {
                "zh-cn": "预热中",
                en: "Warming Up",
                jp: "ウォーミングアップ中です。",
                it: "Riscaldamento",
                de: "Aufwärmphase",
                es: "Calentando",
                fr: "Préparation",
                nl: "Opwarmen",
                pt: "A aquecer",
                ru: "Прогрев"
            },
            notstill: {
                "zh-cn": "不静止",
                en: "Moving",
                jp: "移動中です。",
                it: "In movimento",
                de: "In Bewegung",
                es: "Moviéndose",
                fr: "Mouvement",
                nl: "In beweging",
                pt: "Em movimento",
                ru: "Перемещение"
            },
            notCali: {
                "zh-cn": "未校准",
                en: "Not Calibrated",
                jp: "キャリブレーションされていません。",
                it: "Non calibrato",
                de: "Nicht kalibriert",
                es: "Sin calibrar",
                fr: "Non étalonné",
                nl: "Niet gekalibreerd",
                pt: "Não calibrado",
                ru: "Не откалиброван"
            },
            advcaling: {
                "zh-cn": "高级校准过程中",
                en: "Advanced Calibration in Progress",
                jp: "詳細キャリブレーション進行中",
                it: "Calibrazione avanzata in corso",
                de: "Erweiterte Kalibrierung läuft",
                es: "Calibración avanzada en curso",
                fr: "Étalonnage avancé en cours",
                nl: "Geavanceerde kalibratie wordt uitgevoerd",
                pt: "Calibragem avançada em curso",
                ru: "Выполняется расширенная калибровка"
            },
            basicaling: {
                "zh-cn": "基础校准过程中",
                en: "Baisc Calibration in Progress",
                jp: "標準キャリブレーション進行中",
                it: "Calibrazione di base in corso",
                de: "Basiskalibrierung läuft",
                es: "Calibración básica en curso",
                fr: "Étalonnage de base en cours",
                nl: "Standaardkalibratie wordt uitgevoerd",
                pt: "Calibragem básica em curso",
                ru: "Выполняется базовая калибровка"
            },
            advcalisuccess: {
                "zh-cn": "高级校准成功",
                en: "Advanced Calibration Success",
                jp: "詳細キャリブレーション完了",
                it: "Calibrazione avanzata completata con successo",
                de: "Erweiterte Kalibrierung erfolgreich",
                es: "Calibración avanzada efectuada",
                fr: "Étalonnage avancé réussi",
                nl: "Geavanceerde kalibratie geslaagd",
                pt: "Calibragem avançada bem-sucedida",
                ru: "Расширенная калибровка успешно завершена"
            },
            basicalisuccess: {
                "zh-cn": "基础校准成功",
                en: "Basic Calibration Success",
                jp: "標準キャリブレーション完了",
                it: "Calibrazione di base completata con successo",
                de: "Basiskalibrierung erfolgreich",
                es: "Calibración básica efectuada",
                fr: "Étalonnage de base réussi",
                nl: "Standaardkalibratie geslaagd",
                pt: "Calibragem básica bem-sucedida",
                ru: "Базовая калибровка успешно завершена"
            },
            imutemperror: {
                "zh-cn": "校准失败，不在目标校准温度范围",
                en: "Calibration Failed. Temperature out of Safe Calibration Range."
            },
            imutemptoohigh: {
                "zh-cn": "校准失败，温度超限",
                en: "Calibration Failed. Exceeded Maximum Temperature"
            },
            tempnotready: {
                "zh-cn": "校准失败，温度没有就绪",
                en: "Calibration Failed. Temperature not ready."
            },
            flashactionerror: {
                "zh-cn": "校准失败，存储异常",
                en: "Calibration Failed. Saving Error."
            },
            craftmoved: {
                "zh-cn": "校准失败，飞机被移动",
                en: "Calibration Failed. Aircraft is moved."
            },
            autodirerror: {
                "zh-cn": "校准失败，方向自动识别错误",
                en: "Calibration Failed. Automatic Orientation Error."
            },
            califorbit: {
                "zh-cn": "校准失败，电机已启动禁止校准",
                en: "Calibration Failed. Cannot calibrate when motors are running."
            },
            califorbitwhenemulate: {
                "zh-cn": "校准失败，仿真模式下禁止校准",
                en: "Calibration Failed. Simulation Mode is operating."
            },
            Choosetocalibrate: {
                "zh-cn": "选择要校准的IMU",
                en: "Choose IMU to calibrate",
                jp: "キャリブレーションを選択してください。",
                it: "Scegliere IMU da calibrare",
                de: "IMU zur Kalibrierung wählen",
                es: "Seleccione la IMU para calibrar",
                fr: "Sélectionnez l'IMU à étalonner.",
                nl: "Kies IMU om te kalibreren",
                pt: "Escolher IMU para calibrar",
                ru: "Выберите IMU для калибровки"
            },
            Username: {
                "zh-cn": "用户名",
                en: "Username",
                jp: "ユーザー名",
                it: "Nome utente",
                de: "Benutzername",
                es: "Nombre de usuario",
                fr: "Nom d'utilisateur",
                nl: "Gebruikersnaam",
                pt: "Nome de utilizador",
                ru: "Имя пользователя"
            },
            Action: {
                "zh-cn": "操作",
                en: "Action",
                jp: "操作",
                it: "Azione",
                de: "Handlung",
                es: "Acción",
                fr: "Action",
                nl: "Actie",
                pt: "Ação",
                ru: "Действие"
            },
            UpgradeProgress: {
                "zh-cn": "升级进度",
                en: "Update Progress",
                jp: "アップデートの進捗状況",
                it: "Avanzamento aggiornamento",
                de: "Update-Fortschritt",
                es: "Actualizar progreso",
                fr: "Progression de la mise à jour",
                nl: "Voortgang van update",
                pt: "Progresso de atualização",
                ru: "Ход обновления"
            },
            LatestFirmware: {
                "zh-cn": "最新固件",
                en: "Latest Firmware",
                jp: "最新ファームウェア",
                it: "Firmware più recente",
                de: "Neueste Firmware",
                es: "Firmware más reciente",
                fr: "Dernière version du micrologiciel",
                nl: "Nieuwste firmware",
                pt: "Firmware mais recente",
                ru: "Последняя версия микропрограммного обеспечения"
            },
            Firmware: {
                "zh-cn": "固件",
                en: "Firmware",
                jp: "ファームウェア",
                it: "Firmware",
                de: "Firmware",
                es: "Firmware",
                fr: "Micrologiciel",
                nl: "Firmware",
                pt: "Firmware",
                ru: "Микропрограммное обеспечение"
            },
            Loader: {
                "zh-cn": "Loader",
                en: "Loader",
                jp: "ローダー",
                it: "Caricatore",
                de: "Loader",
                es: "Cargador",
                fr: "Chargeur",
                nl: "Lader",
                pt: "Carregador",
                ru: "Загрузчик"
            },
            disclaimerContent: {
                "zh-cn": "本产品并非玩具，不适合未满18岁的人士使用。请勿让儿童接触本产品，在有儿童出现的场景操作时请务必特别小心注意。 使用本产品之前，请仔细阅读本文档。本声明对安全使用本产品以及您的合法权益有着重要影响。 本产品是一款多旋翼飞行器，在电源正常工作及各部件未损坏的情况下将提供轻松自如的飞行体验。访问http://www.dji.com/cn获取最新说明和警告。深圳市大疆创新科技有限公司（DJI）保留更新本免责声明的权利。最新的免责声明，请以http://www.dji.com/cn网站上及您邮件接收的版本为准。 务必在使用产品之前仔细阅读本文档，了解您的合法权益、责任和安全说明；否则，可能带来财产损失、安全事故和人身安全隐患。一旦使用本产品，即视为您已理解、认可和接受本声明全部条款和内容。使用者承诺对自己的行为及因此而产生的所有后果负责。使用者承诺仅出于正当目的使用本产品，并且同意本条款及DJI可能制定的任何相关政策或者准则。您了解并同意，在无DJI GO App飞行记录的情况下，DJI可能无法分析您的产品损坏或事故原因，并无法向您提供DJI售后服务。 DJI不承担因用户未按本指引、《用户手册》使用产品所引发的一切损失。 在法律允许的最大范围内，在任何情况下，DJI均不对任何间接性、后果性、惩罚性、偶然性、特殊性或刑罚性的损害，包括因您购买、使用或不能使用本产品而遭受的损失，承担责任（即使DJI已被告知该等损失的可能性亦然）。 在使用本设备搭载其它设备时，需全面了解相关规范、谨慎使用，因飞行事故导致的第三方设备损失及人身、财产损害，DJI不对其承担责任，如需搭载贵重设备，建议购买相关保险。 在遵从法律法规的情况下，DJI 享有对以上条款的最终解释权。大疆创新有权在不事先通知的情况下，对本注意事项的条款内容进行更新，改版或终止。在本文档下载服务终止以前，本注意事项长期有效。 DJI是深圳市大疆创新科技有限公司及其关联公司的商标。本文出现的产品名称、品牌等，均为其所属公司的商标或注册商标。",
                en: "This product is NOT a toy and is not suitable for children under the age of 18. Adults should keep the aircraft out of the reach of children and exercise caution when operating this aircraft in the presence of children. While the product adopts advanced technology, inappropriate use of the product could result in personal injury or property damages. Please read the materials associated with the product before your first use of the product. These documents are included in the product package and are also available online on the DJI product page at http://www.dji.com. This product is a multirotor flying platform that offers easy flight when in good working order as set forth below. Visit http://www.dji.com for the most current instructions and warnings and http://knowbeforeyoufly.org/ for more information about flight safety and compliance. The information in this document affects your safety and your legal rights and responsibilities. Read this entire document carefully to ensure proper configuration before use. Failure to read and follow the instructions and warnings in this document may result in product loss, serious injury to you, or damage to your aircraft. By using this product, you hereby signify that you have read this disclaimer carefully and that you understand and agree to abide by the terms and conditions herein. EXCEPT AS EXPRESSLY PROVIDED IN DJI AFTER-SALES SERVICE POLICIES AVAILABLE AT (HTTP://WWW.DJI.COM/SERVICE), THE PRODUCT AND ALL MATERIALS, AND CONTENT AVAILABLE THROUGH THE PRODUCT ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS, WITHOUT WARRANTY OR CONDITION OF ANY KIND, EITHER EXPRESS OR IMPLIED. DJI DISCLAIMS ALL WARRANTIES OF ANY KIND, EXCEPT AS EXPRESSLY PROVIDED IN DJI AFTER-SALES SERVICE POLICIES, WHETHER EXPRESS OR IMPLIED, RELATING TO THE PRODUCT, PRODUCT ACCESSORIES, AND ALL MATERIALS, INCLUDING: (A) ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, OR NON-INFRINGEMENT; AND (B) ANY WARRANTY ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE. DJI DOES NOT WARRANT, EXCEPT AS EXPRESSLY PROVIDED IN DJI LIMITED WARRANTY, THAT THE PRODUCT, PRODUCT ACCESSORIES, OR ANY PORTION OF THE PRODUCT, OR ANY MATERIALS, WILL BE UNINTERRUPTED, SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS, AND DO NOT WARRANT THAT ANY OF THOSE ISSUES WILL BE CORRECTED. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE PRODUCT, PRODUCT ACCESSORIES, OR ANY MATERIALS WILL CREATE ANY WARRANTY REGARDING DJI OR THE PRODUCT THAT IS NOT EXPRESSLY STATED IN THESE TERMS. YOU ASSUME ALL RISKS FOR ANY DAMAGE THAT MAY RESULT FROM YOUR USE OF OR ACCESS TO THE PRODUCT, PRODUCT ACCESSORIES, AND ANY MATERIALS. YOU UNDERSTAND AND AGREE THAT YOU USE THE PRODUCT AT YOUR OWN DISCRETION AND RISK, AND THAT YOU ARE SOLELY RESPONSIBLE FOR ANY PERSONAL INJURY, DEATH, DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR DJI HARDWARE USED IN CONNECTION WITH THE PRODUCT) OR THIRD PARTY PROPERTY, OR THE LOSS OF DATA THAT RESULTS FROM YOUR USE OF OR INABILITY TO USE THE PRODUCT. SOME JURISDICTIONS MAY PROHIBIT A DISCLAIMER OF WARRANTIES AND YOU MAY HAVE OTHER RIGHTS THAT VARY FROM JURISDICTION TO JURISDICTION. DJI is a trademark of SZ DJI TECHNOLOGY CO., LTD. (abbreviated as “DJI”) and its affiliated companies. Names of products, brands, etc., appearing in this document are trademarks or registered trademarks of their respective owner companies. Limitation of Liability IN NO EVENT WILL THE DJI ENTITIES BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE PRODUCT, PRODUCT ACCESSORIES, OR ANY MATERIALS, FLIGHT ENVIRONMENT DATA, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT ANY DJI ENTITY HAS BEEN INFORMED OF THE POSSIBILITY OF DAMAGE. EXCEPT AS OTHERWISE AGREED UPON BETWEEN YOU AND DJI, THE AGGREGATE LIABILITY OF THE DJI ENTITIES TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR ANY INABILITY TO USE ANY PORTION OF THE PRODUCT OR OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO $100. Data Storage and Usage When you use our mobile apps or our products or other software, you may provide DJI with data regarding the use and operation of the product, such as flight telemetry data (e.g., speed, altitude, battery life, and information about the gimbal and camera) and operations record. Please refer to DJI Privacy Policy (available at dji.com/policy) for more information.",
                jp: "本製品は玩具ではありません。また、18 歳未満を対象としていません。Matrice 600 Proは子供の手の届かない場所に保管してください。また、子供がいるところで機体を操作する場合は、十分に注意してください。 製品には先進技術が採用されていますが、製品の不適切な使用により、けがや物的損害を引き起こすおそれがあります。製品を使用する前に、製品に関連する資料をお読みください。これらの文書は製品パッケージに含まれますが、オンラインのDJI製品ページ（http://www.dji.com）でも入手できます。 本製品は、以下のように正常に操作できる状態であれば、簡単に飛行させることができるマルチコプター飛行プラットフォームです。最新の注意事項と警告については、http://www.dji.com をご覧ください。安全な飛行と法令順守の詳細については、http://knowbeforeyoufly.org/をご覧ください。 本書では、ユーザーの安全と法的権利と責任に関する情報を取り扱っています。ご使用の前に、この文書のすべての内容をよくお読み頂き、確実に適切な設定ができるようにしてください。本書の手順と警告を正しく理解して実行しない場合、本製品の損失、ユーザーの重傷、機体の損傷を招くおそれがあります。 本製品を使用すると、本書の免責事項をよく読み、記載される条件を理解し、これを順守することに同意したとみなされます。DJIアフターセールス・サービス・ポリシー（http://www.dji.com/service に掲載）に明示的な規定がない限り、製品およびすべての資料、製品を通して得られるコンテンツは「現状のまま」および「提供されているまま」で提供され、明示、黙示を問わず、いかなる種類の保証も条件も伴いません。明示、黙示を問わず、DJIアフターセールス・サービス・ポリシーに明示的に規定がない限り、製品、製品アクセサリー、すべての資料に関し、DJIは以下を含む、いかなる種類の保証も一切行いません。（A）商品性、特定目的の適切性、権限、平和享有権、非侵害に対する黙示的保証、および（B）取引の過程、使用、商習慣から生ずる保証。DJI限定保証に明示的な規定がない限り、製品、製品アクセサリー、製品の一部、資料が、中断のないこと、安全で、エラー、ウイルス、その他有害なコンポーネントがないことをDJIは保証しません。また、それらの問題の修正も保証しません。 本規約に明示的な記載がない限り、口頭であれ書面であれ、製品、製品アクセサリー、資料から得られる助言や情報により、DJIまたは製品に関する保証は発生しません。製品、製品アクセサリー、資料の使用またはアクセスに起因するあらゆる損害に対するすべてのリスクは、すべてお客様が負うものとします。お客様の裁量とリスクにおいて本製品を使用し、けが、死亡、お客様の財産への損害（本製品と接続して使用したコンピュータシステム、モバイルデバイス、DJIハードウェアを含む）、第三者の財産への損害、本製品使用による、あるいは使用不能によるデータの損失に対して、お客様が単独で責任を負うことについてお客様は理解し、合意するものとします。 保証の免責を認めていない司法管轄区もあり、司法管轄区によっては別の権利を有する場合もあります。 DJI は、SZ DJI TECHNOLOGY CO., LTD.（略して「DJI」）およびその関連会社の商標です。本書に記載されている製品、ブランドなどの名称は、その所有者である各社の商標または登録商標です。 責任限定 DJIエンティティは、本製品あるいは何らかのマテリアル、飛行環境データ、本製品の内容へのアクセスまたは使用に関連し、もしくはアクセスまたは使用不可に起因しまたはこれに関連して生じる間接的、偶発的、特別、必然的、懲罰的損害（利益、信用、その他の無形資産の損失を含みます）について、保証、契約、不法行為（過失も含む）、法令、その他の法理論に基づくものでも、DJIエンティティがその損害リスクについて通知を受けていたか否かに関わらず、一切の法的責任を負いません。 本製品の一部の利用または利用不可に起因しまたはこれに関連して生じたあらゆるクレームまたはその他諸条件の下で、DJIエンティティが負う負債総額は、契約の記述、不法行為その他の有無に関わらず、＄100を限度額とします。 DJIおよびお客様間の本製品に関わる合意が、日本の消費者契約法下の消費者契約とみなされる場合、DJIによる重過失もしくは故意の不法行為が発生した場合、免責の制限は適用されません。 法域によっては、派生的または付随的な損害に対する責任の免除あるいは限定が認められていません。したがって、上記の免責範囲は適用されない場合があります。 責任制限、保証の否認、あるいは損害の免責を規定している諸条件の各条項は、諸条件下の当事者間で生じるリスクを対象とし、各当事者に配分するものです。この配分は当事者間の取引や交渉の重要な基本要素になります。これらの条項は、諸条件のその他すべての条項から分離可能かつ独立しています。本第17項の制限は、いかなる限定的救済策が本質的目的を果たせない場合であっても適用されます。 データの保管と使用法 当社のモバイルアプリ、製品、その他のソフトウェアの使用中、フライトテレメトリデータ（速度、高度、バッテリー寿命、ジンバルとカメラに関する情報）や操作記録など、製品の使用と操作に関するデータをDJIに提供することができます。詳細については、DJIのプライバシーポリシー（dji.com/policyに掲載）を参照してください。",
                it: "Questo prodotto NON è un giocattolo e non è pertanto adatto ai minori di 18 anni. Gli adulti dovrebbero tenere il velivolo fuori della portata dei bambini ed esercitare la dovuta cautela nell'azionarlo in presenza di bambini. Quando il prodotto adotta la tecnologia avanzata, l'uso improprio dello stesso può provocare lesioni a persone o danni materiali. Prima del primo utilizzo del prodotto, leggere la documentazione a esso associata. La presente documentazione è inclusa nella confezione del prodotto ed è inoltre disponibile on-line sulla pagina dei prodotti DJI all'indirizzo http://www.dji.com. Il presente prodotto è una piattaforma di volo multirotore di facile utilizzo quando si trova in buono stato di funzionamento, così come esposto di seguito. Visitare il sito Web http://www.dji.com per le istruzioni e le avvertenze aggiornate e http://knowbeforeyoufly.org/ per ulteriori informazioni sulla sicurezza in volo e la conformità alle disposizioni applicabili. Le informazioni contenute nel presente documento riguardano la sicurezza, i diritti e le responsabilità legali degli utenti. Leggere con attenzione l'intero documento per garantire la corretta configurazione dell'apparecchio prima dell'uso. La mancata lettura del presente documento e l'inosservanza delle istruzioni e delle avvertenze in esso contenute possono risultare in perdite di prodotto, gravi lesioni personali o danni al velivolo. Utilizzando il prodotto, l'utente dichiara di aver letto e compreso le limitazioni di responsabilità e di accettare i termini e le condizioni ivi specificati. SALVO QUANTO ESPRESSAMENTE PREVISTO NELL'INFORMATIVA DI ASSISTENZA POST-VENDITA DJI (INFORMATIVA DISPONIBILE SU HTTP://WWW.DJI.COM/SERVICE), IL PRODOTTO E TUTTI I MATERIALI E I CONTENUTI DISPONIBILI SUL PRODOTTO VENGONO FORNITI \"COSÌ COME SONO\" E IN BASE \"ALLA DISPONIBILITÀ\", SENZA GARANZIA O CONDIZIONE DI ALCUN TIPO, ESPRESSA O IMPLICITA. DJI NON RICONOSCE GARANZIE DI ALCUN TIPO, AD ECCEZIONE DI QUANTO ESPRESSAMENTE PREVISTO NELL'INFORMATIVA DI ASSISTENZA POST-VENDITA ESPLICITA O IMPLICITA, RELATIVA A PRODOTTO, ACCESSORI DEL PRODOTTO E TUTTI I MATERIALI, COMPRESE TRA LE ALTRE: (A) LE GARANZIE IMPLICITE DI COMMERCIABILITÀ E IDONEITÀ A UNO SCOPO PARTICOLARE, TITOLO, QUIETO GODIMENTO O ASSENZA DI VIOLAZIONI; E (B) LE GARANZIE DERIVANTI DA TRATTATIVE, USI O CONSUETUDINI COMMERCIALI. DJI NON GARANTISCE, AD ECCEZIONE DI QUANTO ESPRESSAMENTE PREVISTO NELLA GARANZIA LIMITATA DJI, CHE IL PRODOTTO, GLI ACCESSORI DEL PRODOTTO O QUALSIASI PARTE DEL PRODOTTO O QUALSIASI MATERIALE, SARÀ ININTERROTTO, SICURO O PRIVO DI ERRORI, VIRUS O ALTRI COMPONENTI DANNOSI E NON GARANTISCE CHE UNO DI QUESTI PROBLEMI VENGA CORRETTO. NESSUNA INFORMAZIONE O CONSIGLIO, VERBALE O SCRITTO, OTTENUTO DALL'UTENTE DEL PRODOTTO, DEGLI ACCESSORI DEL PRODOTTO O DI ALTRO MATERIALE GENERERÀ ALCUNA GARANZIA RELATIVA A DJI O AL PRODOTTO CHE NON SIA ESPRESSAMENTE INDICATA IN QUESTI TERMINI. L'UTENTE SI ASSUME TUTTI I RISCHI PER I DANNI CHE POSSONO DERIVARE DALL'USO O DALL'ACCESSO AL PRODOTTO, AGLI ACCESSORI DEL PRODOTTO E AI MATERIALI. L'UTILIZZATORE RICONOSCE E ACCETTA DI UTILIZZARE IL PRODOTTO A PROPRIA DISCREZIONE E RISCHIO E CHE È IL SOLO RESPONSABILE DI EVENTUALI LESIONI A PERSONE, MORTE, DANNI AI PROPRI MATERIALI (INCLUSO IL SISTEMA DEL PROPRIO COMPUTER O DISPOSITIVO MOBILE O L'HARDWARE DJI UTILIZZATO INSIEME AL PRODOTTO) O AI MATERIALI DI PROPRIETÀ DI TERZI, O PERDITA DI DATI DERIVANTE DALL'UTILIZZO DEL PRODOTTO O DALL'INCAPACITÀ DI UTILIZZARE LO STESSO. ALCUNE GIURISDIZIONI POSSONO NON CONSENTIRE LE LIMITAZIONI DI RESPONSABILITÀ DI ALCUNE GARANZIE E L'UTILIZZATORE POTREBBE AVERE ALTRI DIRITTI CHE VARIANO DA GIURISDIZIONE A GIURISDIZIONE. DJI è un marchio di SZ DJI TECHNOLOGY CO., LTD. (abbreviato come \"DJI\") e sue società affiliate. I nomi di prodotti, marchi, ecc. che compaiono nel presente documento sono marchi o marchi registrati delle rispettive società proprietarie. Limitazione di responsabilità IN NESSUN CASO LE ENTITÀ GIURIDICHE DJI POSSONO ESSERE RITENUTE RESPONSABILI PER EVENTUALI DANNI INDIRETTI, INCIDENTALI, SPECIALI, CONSEGUENTI O PUNITIVI (COMPRESI I DANNI PER PERDITA DI PROFITTI, DI AVVIAMENTO O QUALSIASI ALTRA PERDITA DI BENI IMMATERIALI) DERIVANTI O RELATIVI ALLA POSSIBILITÀ O IMPOSSIBILITÀ DI ACCEDERE O UTILIZZARE IL PRODOTTO, GLI ACCESSORI O MATERIALI, I DATI SULL'AMBIENTE DI VOLO, QUALORA LA PRETESA SI FONDI SU GARANZIA, CONTRATTO, ILLECITO (NEGLIGENZA INCLUSA), STATUTO O QUALSIASI ALTRA DOTTRINA E INDIPENDENTEMENTE DAL FATTO CHE QUALSIASI ENTITÀ GIURIDICA DJI SIA STATA INFORMATA DELLA POSSIBILITÀ DI DANNI. FATTA ECCEZIONE PER QUANTO ALTRIMENTI CONCORDATO TRA L'UTENTE E DJI, LA RESPONSABILITÀ CONGIUNTA DELLE ENTITÀ GIURIDICHE DJI PER TUTTI I RECLAMI DERIVANTI O RELATIVI ALL'UTILIZZO O ALL'IMPOSSIBILITÀ DI UTILIZZO DI QUALSIASI PARTE DEL PRODOTTO, AD ECCEZIONE PER I CASI STABILITI ALL'INTERNO DI QUESTI TERMINI E CONDIZIONI, QUALORA LA PRETESA SI FONDI SU CONTRATTO, ILLECITO O ALTRO, È LIMITATA A $100. Archiviazione e uso dei dati Durante l'utilizzo della nostra applicazione per dispositivi mobili o dei nostri prodotti o altri software, i dati relativi all'utilizzo e al funzionamento del prodotto stesso, quali ad esempio i dati relativi alla telemetria di volo (ad esempio velocità, altitudine, durata della batteria e informazioni su gimbal e telecamera), così come i registri di attività, vengono inviati a DJI. Per ulteriori informazioni fare riferimento all'informativa sulla privacy DJI (disponibile all'indirizzo dji.com/policy).",
                de: "Bei diesem Produkt handelt es sich um kein Spielzeug. Für Personen unter 18 Jahren ist das Produkt nicht geeignet. Als volljährige Person sind Sie dafür verantwortlich, das Fluggerät außerhalb der Reichweite von Kindern aufzubewahren. Beim Betrieb des Fluggeräts in der Anwesenheit von Kindern ist höchste Vorsicht geboten. Das Produkt arbeitet zwar mit moderner Elektronik, kann bei unsachgemäßer Verwendung allerdings Sach- und Personenschäden verursachen. Bitte lesen Sie vor dem ersten Gebrauch des Produkts die Begleitdokumentation durch. Die Dokumente werden mit dem Produkt geliefert und können auch auf der DJI-Produktseite (http://www.dji.com) heruntergeladen werden. Bei diesem Produkt handelt es sich um eine Flugplattform mit mehreren Rotoren, die in einwandfreiem technischem Zustand (Beschreibung siehe unten) leicht zu bedienen ist. Die aktuellen Anweisungen und Warnhinweise zum Produkt finden Sie auf http://www.dji.com. Weitere Informationen zu Flugsicherheit und Einhaltung der einschlägigen Vorschriften finden Sie auf http://knowbeforeyoufly.org/. Die hier enthaltenen Informationen betreffen Ihre persönliche Sicherheit sowie Ihre gesetzlichen Rechte und Verpflichtungen. Bitte lesen Sie das gesamte Dokument aufmerksam durch, um das Produkt für den Betrieb ordnungsgemäß einrichten zu können. Bei Nichtbeachtung dieser Anweisungen und Warnhinweise können der Verlust des Produkts, schwere Personenschäden oder Sachschäden am Fluggerät die Folge sein. Mit dem Gebrauch des Produkts bestätigen Sie, dass Sie diesen Haftungsausschluss aufmerksam gelesen und den Inhalt verstanden haben, und erklären Ihr Einverständnis mit den Bedingungen. SOFERN NICHT AUSDRÜCKLICH IN DEN KUNDENDIENSTRICHTLINIEN (SIEHE HTTP://WWW.DJI.COM/SERVICE) ANGEGEBEN, WERDEN DAS PRODUKT SOWIE ALLE DARÜBER ZUGÄNGLICHEN MATERIALIEN UND INHALTE ENTSPRECHEND DEM AKTUELLEN ENTWICKLUNGSSTAND UND OHNE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE ZUSICHERUNGEN ODER BEDINGUNGEN BEREITGESTELLT. SOFERN NICHT AUSDRÜCKLICH ODER STILLSCHWEIGEND IN DEN KUNDENDIENSTRICHTLINIEN ANGEGEBEN, ÜBERNIMMT DJI KEINE HAFTUNG FÜR DAS PRODUKT, DAS PRODUKTZUBEHÖR UND DIE MATERIALIEN EINSCHLIESSLICH: (A) STILLSCHWEIGENDER ZUSICHERUNGEN ZU ALLGEMEINER GEBRAUCHSFÄHIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, VOLLSTÄNDIGKEIT, UNGESTÖRTEM BESITZ ODER NICHTVERLETZUNG DER RECHTE DRITTER; SOWIE (B) ZUSICHERUNGEN, DIE AUF DAS HANDELN, DEN GEBRAUCH ODER DEN AN- ODER VERKAUF ZURÜCKZUFÜHREN SIND. SOFERN NICHT AUSDRÜCKLICH IN DER BESCHRÄNKTEN DJI-GARANTIE ANGEGEBEN, SICHERT DJI NICHT ZU, DASS DAS PRODUKT, DAS PRODUKTZUBEHÖR, TEILE DES PRODUKTS ODER DIE MATERIALIEN UNTERBRECHUNGSFREI, GEFAHRLOS ODER FREI VON FEHLERN, VIREN ODER ANDEREN SCHÄDLICHEN BESTANDTEILEN ZU BETREIBEN SIND, UND DASS SOLCHE MÄNGEL BEHOBEN WERDEN. KEINE BERATUNG ODER INFORMATION IN MÜNDLICHER ODER SCHRIFTLICHER FORM, DIE SIE AUS DEM PRODUKT, DEM PRODUKTZUBEHÖR ODER DEN MATERIALIEN ZIEHEN, KANN EINE ZUSICHERUNG BEZÜGLICH DJI ODER DEM PRODUKT ABGELEITET WERDEN, DIE IN DIESEN NUTZUNGSBEDINGUNGEN NICHT AUSDRÜCKLICH ANGEGEBEN IST. SIE ÜBERNEHMEN ALLE RISIKEN FÜR JEGLICHE SCHÄDEN, DIE DURCH IHREN GEBRAUCH DES PRODUKTS, DES PRODUKTZUBEHÖRS ODER DER MATERIALIEN BZW. DEN ZUGRIFF DARAUF ENTSTEHEN. SIE BESTÄTIGEN, DASS SIE DAS PRODUKT NACH EIGENEM ERMESSEN UND AUF EIGENES RISIKO VERWENDEN UND ALLEIN FÜR PERSONENSCHÄDEN, TODESFÄLLE, SACHSCHÄDEN AN EIGENEN (BEZIEHT SICH AUCH AUF DAS COMPUTERSYSTEM, DAS MOBILGERÄT ODER DIE DJI-HARDWARE, DIE SIE IN VERBINDUNG MIT DEM PRODUKT VERWENDEN) ODER FREMDEN GÜTERN SOWIE FÜR DATENVERLUSTE VERANTWORTLICH SIND, DIE AUF IHREN GEBRAUCH DES PRODUKTS BZW. AUF IHRE UNFÄHIGKEIT ZUM GEBRAUCH DES PRODUKTS ZURÜCKZUFÜHREN SIND. IN MANCHEN GERICHTSBARKEITEN IST EIN GEWÄHRLEISTUNGSAUSSCHLUSS NICHT ZULÄSSIG, SODASS IHNEN JE NACH GERICHTSBARKEIT ANDERE RECHTE GEWÄHRT WERDEN. Haftungsbeschränkung IN KEINEM FALL IST DJI ODER EINE IHRER EINHEITEN HAFTBAR FÜR INDIREKTE, ZUFÄLLIGE, NEBEN-ODER FOLGESCHÄDEN, NOCH FÜR STRAFSCHÄDEN (EINSCHLIESSLICH ENTGANGENER GEWINNE, DEM VERLUST VON GESCHÄFTSWERT ODER ANDERE IMMATERIELLE VERLUSTE), DIE SICH AUS IHRER NUTZUNG ODER DER NICHT-ZUGÄNGLICHKEIT DES PRODUKTES ODER JEGLICHER INFORMATIONEN, FLUGUMGEBUNGSDATEN ODER ANDERER PRODUKTINHALTE ERGEBEN KÖNNEN. DABEI SPIELT ES KEINE ROLLE, OB SICH DIESE SCHÄDEN DURCH GARANTIE, VERTRAG, SELBSTVERSCHULDEN (EINSCHLIESSLICH FAHRLÄSSIGKEIT), VORSCHRIFTEN ODER ANDERE RECHTSGRUNDLAGEN ERGEBEN, UND OB DJI ÜBER MÖGLICHE SCHÄDEN INFORMIERT WAR. EINIGE RECHTSORDNUNGEN ERLAUBEN DEN AUSSCHLUSS ODER DIE BESCHRÄNKUNG DER HAFTUNG FÜR FOLGESCHÄDEN NICHT. DEMENTSPRECHEND IST ES MÖGLICH, DASS DIE OBIGEN EINSCHRÄNKUNGEN FÜR SIE NICHT ZUTREFFEN. FERNER LIMITIERT ODER SCHLIESST NICHTS IN DIESEN BEDINGUNGEN IHRE EIGENE ODER UNSERE HAFTUNG FÜR VORSÄTZLICHE VERLETZUNG NOCH BETRÜGERISCHE FEHLINTERPRETATION DIESER BEDINGUNGEN AUS, NOCH TOD ODER PERSONENSCHÄDEN AUFGRUND UNSERER FAHRLÄSSIGKEIT ODER DER FAHRLÄSSIGKEIT UNSERER VERTRETER ODER ARBEITNEHMER ODER JEGLICHE ANDERE HAFTUNG, DIE GESETZLICH WEDER BEGRENZT NOCH AUSGESCHLOSSEN WERDEN KANN. JEDE BESTIMMUNG DIESER BEDINGUNGEN, DIE FÜR EINE BEGRENZUNG DER HAFTBARKEIT, HAFTUNGSAUSSCHLUSS ODER DEN AUSSCHLUSS VON SCHÄDEN SORGT, ZIELT DARAUF HIN, DIE RISIKEN ZWISCHEN DEN PARTEIEN AUFZUTEILEN. DIESE AUFTEILUNG IST EIN WESENTLICHES ELEMENT DER GRUNDLAGE DER ÜBEREINKUNFT ZWISCHEN DEN PARTEIEN. JEDE DIESER BESTIMMUNGEN IST TRENNBAR UND UNABHÄNGIG VON ALLEN ANDEREN BESTIMMUNGEN DIESER BEDINGUNGEN. DIE BESCHRÄNKUNGEN IN DIESEM ABSCHNITT 13 GELTEN, AUCH WENN JEGLICHE BEGRENZTE MITTEL DEN WESENTLICHEN ZWECK VERFEHLEN. NICHTS IN DIESEN BEDINGUNGEN BEEINTRÄCHTIGT IHRE GESETZLICHEN VERBRAUCHERSCHUTZRECHTE. DIE GESETZE EINIGER LÄNDER LASSEN EINIGE ODER ALLE DER OBEN BESCHRIEBENEN EINSCHRÄNKUNGEN NICHT ZU. FALLS DIESE GESETZE AUF SIE ZUTREFFEN, SIND SIE VON EINIGEN ODER ALLEN DER OBEN GENANNTEN EINSCHRÄNKUNGEN AUSGENOMMEN UND SIE HABEN MÖGLICHERWEISE ZUSÄTZLICHE RECHTE. DJI ist eine Marke der SZ DJI TECHNOLOGY CO., LTD. (kurz DJI) und seiner verbundenen Unternehmen. Namen von Produkten, Marken, usw., die in diesem Dokument enthalten sind, sind Warenzeichen oder eingetragene Warenzeichen der jeweiligen Besitzer. Daten speichern und abrufen Beim Gebrauch unserer Apps, Produkte und Softwareprogramme können Sie DJI Daten zu Nutzung und Betrieb des Produkts (z. B. Telemetriedaten wie Fluggeschwindigkeit, Flughöhe, Akkulebensdauer oder Daten zu Gimbal und Kamera) und Betriebsprotokolle bereitstellen. Weitere Informationen entnehmen Sie den Datenschutzrichtlinien von DJI (unter dji.com/policy).",
                es: "Este producto NO es un juguete y no es adecuado para menores de 18 años. Los adultos deben mantener la aeronave fuera del alcance de los niños y actuar con precaución al utilizarlo en presencia de niños. Aunque el producto incorpora tecnología avanzada, un uso inapropiado puede ocasionar lesiones personales o daños materiales. Lea la documentación asociada al producto antes de usarlo por primera vez. Encontrará dicha documentación en el embalaje y también online, en la página de productos de DJI en http://www.dji.com. Este producto es una plataforma de vuelo de varios rotores que permite un vuelo seguro si se encuentra en buenas condiciones de funcionamiento, tal y como se establece a continuación. Visite http://www.dji.com para obtener las instrucciones y advertencias más actualizadas, y http://knowbeforeyoufly.org/ para obtener más información sobre seguridad de vuelo y conformidad. La información incluida en este documento afecta a su seguridad, y a sus derechos y responsabilidades legales. Lea este documento en su totalidad para garantizar una configuración adecuada antes de su uso. Si no lee y respeta las instrucciones y advertencias de este documento, puede provocar la pérdida del producto, lesiones graves a sí mismo o daños en la aeronave. Al usar este producto, por la presente manifiesta que ha leído esta renuncia de responsabilidad con atención y que entiende y acepta cumplir con los términos y condiciones establecidos en este documento. SALVO INDICACIÓN EXPRESA AL CONTRARIO EN LAS POLÍTICAS DE SERVICIO POSTVENTA DISPONIBLES EN (HTTP://WWW.DJI.COM/SERVICE), EL PRODUCTO, INCLUIDOS LOS MATERIALES Y CONTENIDOS DISPONIBLES A TRAVÉS DEL PRODUCTO, SE SUMINISTRA TAL COMO ES Y COMO ESTÁ DISPONIBLE, PERO SIN GARANTÍAS NI CONDICIONES DE NINGÚN TIPO, EXPRESAS O IMPLÍCITAS. EXCEPTO COMO SE INDIQUE EXPRESAMENTE EN LAS POLÍTICAS DE SERVICIO POSTVENTA DE DJI, DJI RECHAZA EXPRESAMENTE TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS, EN RELACIÓN CON EL PRODUCTO, LOS ACCESORIOS DEL PRODUCTO Y TODOS LOS MATERIALES, INCLUIDAS: (A) TODA GARANTÍA IMPLÍCITA DE COMERCIABILIDAD, IDONEIDAD PARA UNA FINALIDAD DETERMINADA, TÍTULO, DISFRUTE TRANQUILO O NO INFRACCIÓN; Y (B) CUALQUIER GARANTÍA QUE PUDIERA SURGIR DE UN ACUERDO, USO O PRÁCTICA COMERCIAL. DJI NO GARANTIZA, EXCEPTO COMO SE INDIQUE EXPRESAMENTE EN LA GARANTÍA LIMITADA DE DJI, QUE EL PRODUCTO, LOS ACCESORIOS DEL PRODUCTO O CUALQUIER PARTE DEL PRODUCTO, O CUALQUIER MATERIAL, SERÁN SEGUROS, ESTARÁN LIBRES DE INTERRUPCIONES, ERRORES, VIRUS U OTROS COMPONENTES DAÑINOS, COMO TAMPOCO GARANTIZA LA CORRECCIÓN DE NINGUNO DE ESTOS PROBLEMAS. NINGÚN TIPO DE ASESORAMIENTO O INFORMACIÓN, EN FORMA ORAL O POR ESCRITO, QUE USTED PUDIERA OBTENER A TRAVÉS DEL PRODUCTO, LOS ACCESORIOS DEL PRODUCTO U OTROS MATERIALES CREARÁ OTRAS GARANTÍAS RESPECTO DE DJI O EL PRODUCTO QUE LAS EXPRESAMENTE ESTIPULADAS EN LAS PRESENTES CONDICIONES. EL USUARIO ASUME ÍNTEGRAMENTE LOS RIESGOS ASOCIADOS CON LOS DAÑOS DERIVADOS DEL USO DEL PRODUCTO, ACCESORIOS O MATERIALES, O DEL ACCESO A ESTOS. EL USUARIO RECONOCE Y ACEPTA QUE UTILIZA EL PRODUCTO POR SU PROPIA CUENTA Y RIESGO, Y QUE ES EL ÚNICO RESPONSABLE DE CUALQUIER LESIÓN PERSONAL, MUERTE, DAÑOS A SU PROPIEDAD (INCLUIDO SU SISTEMA INFORMÁTICO, DISPOSITIVO MÓVIL O HARDWARE DJI EMPLEADO CON EL PRODUCTO) O A LA AJENA, O LA PÉRDIDA DE DATOS OCASIONADA POR EL USO O INCAPACIDAD PARA EL USO DEL PRODUCTO. EN JURISDICCIONES EN QUE SE PROHIBAN LAS CLÁUSULAS DE EXENCIÓN DE GARANTÍAS, EL USUARIO PODRÍA DISFRUTAR DE OTROS DERECHOS ESPECÍFICOS DE CADA JURISDICCIÓN. DJI es una marca comercial de SZ DJI TECHNOLOGY CO., LTD. (abreviada como “DJI”) y sus empresas afiliadas. Los nombres de productos, marcas, etc., que aparecen en este documento son marcas comerciales o marcas comerciales registradas de sus respectivas empresas propietarias. Limitación De Responsabilidad EN NINGÚN CASO LAS ENTIDADES DJI SERÁN RESPONSABLES POR DAÑOS INCIDENTALES, INDIRECTOS, ESPECIALES, CONSECUENCIALES O PUNITIVOS (INCLUYENDO DAÑOS POR PÉRDIDA DE GANANCIAS, CLIENTELA, O CUALQUIER OTRA PÉRDIDA INTANGIBLE) DERIVADOS DE O RELACIONADOS CON SU ACCESO O USO DE, O SU INCAPACIDAD DE ACCESO O USO, DEL PRODUCTO O CUALQUIER MATERIAL, DATOS DEL ENTORNO DE VUELO O CONTENIDO DEL PRODUCTO, YA SEA BASADO EN LA GARANTÍA, CONTRATO, AGRAVIO (INCLUYENDO NEGLIGENCIA), ESTATUTO; O CUALQUIER OTRA TEORÍA LEGAL, HAYA SIDO O NO CUALQUIER ENTIDAD DJI INFORMADA DE LA POSIBILIDAD DE DAÑOS. ALGUNAS JURISDICCIONES NO PERMITEN LA EXCLUSIÓN O LIMITACIÓN DE RESPONSABILIDAD POR DAÑOS INDIRECTOS O INCIDENTALES. EN CONSECUENCIA, LO ARRIBA ESTIPULADO, NO SERÁ APLICABLE AL USUARIO. ADEMÁS, NINGUNO DE ESTOS TÉRMINOS LIMITA O EXCLUYE LA SUYA O NUESTRA RESPONSABILIDAD POR VIOLACIÓN INTENCIONAL DE LOS TÉRMINOS, REPRESENTACIÓN FRAUDULENTA, POR MUERTE O DAÑOS PERSONALES DERIVADOS DE NUESTRA NEGLIGENCIA O LA NEGLIGENCIA DE NUESTROS AGENTES O EMPLEADOS O POR CUALQUIER OTRA RESPONSABILIDAD QUE NO PUEDA SER LIMITADA NI EXCLUIDA POR LEY. NINGUNA DE ESTAS TÉRMINOS AFECTA SUS DERECHOS LEGALES COMO CONSUMIDOR. LAS LEYES DE ALGUNOS PAÍSES NO PERMITEN ALGUNAS O TODAS LAS LIMITACIONES DESCRITAS ANTERIORMENTE. SI ESTAS LEYES SE APLICAN A USTED, ALGUNAS DE LAS LIMITACIONES PUEDEN NO SER APLICABLES A USTED Y USTED PODRÍA TENER DERECHOS ADICIONALES. Almacenamiento y uso de datos Cuando utilice nuestras aplicaciones móviles o nuestros productos u otro software, es posible que suministre a DJI datos referentes al uso y funcionamiento del producto, como los datos de telemetría de vuelo (p. ej., velocidad, altitud, vida de la batería e información sobre el estabilizador y la cámara) y el registro de operaciones. Consulte la Política de privacidad de DJI (disponible en dji.com/policy) para obtener más información.",
                fr: "Ce produit n'est PAS un jouet et ne doit être utilisé que par des personnes de 18 ans et plus. Les adultes doivent tenir l'appareil hors de portée des enfants et le manipuler avec précaution en leur présence. Étant donné que le produit est doté d'une technologie avancée, une utilisation inappropriée peut causer des blessures ou des dégâts matériels. Avant votre première utilisation du produit, lisez les documents associés au produit. Ces documents sont fournis avec le produit et sont également disponibles en ligne sur la page produit DJI, sur http://www.dji.com. Ce produit est une plateforme volante à hélices multiples facile à piloter lorsque les conditions indiquées ci-dessous sont réunies. Rendez-vous sur le site http://www.dji.com pour connaître les dernières instructions et mises en gardes. Visitez la page http://knowbeforeyoufly.org/ pour en savoir plus sur la sécurité aérienne et la conformité. Les informations contenues dans ce document affectent votre sécurité, vos droits et vos obligations. Lisez-le attentivement pour bien configurer votre appareil avant de l'utiliser. Le non-respect des consignes et mises en garde indiquées ci-après peut entraîner la destruction du produit, provoquer de graves blessures ou endommager l'appareil. En utilisant ce produit, vous confirmez avoir lu attentivement la présente clause d'exclusion de responsabilité, y compris les conditions d'utilisation exposées ici et accepté de vous y conformer. À L'EXCEPTION DE CE QUI A ÉTÉ EXPRESSÉMENT PRÉVU DANS LES POLITIQUES DU SERVICE APRÈS-VENTE DE DJI (DISPONIBLES SUR HTTP://WWW.DJI.COM/SERVICE), LE PRODUIT ET TOUS SES MATÉRIAUX, AINSI QUE TOUT LE CONTENU DISPONIBLE VIA LE PRODUIT SONT FOURNIS « EN L'ÉTAT » ET « SELON DISPONIBILITÉ », SANS GARANTIE NI CONDITION D'AUCUNE SORTE, QU'ELLE SOIT EXPRESSE OU TACITE. DJI DÉCLINE TOUTE GARANTIE QUELLE QU'ELLE SOIT, SAUF TEL QU'EXPRESSÉMENT STIPULÉ DANS LES POLITIQUES DU SERVICE APRÈS-VENTE DE DJI, EXPRESSE OU TACITE, EN LIEN AVEC LE PRODUIT, LES ACCESSOIRES DU PRODUIT ET TOUS LES MATÉRIAUX, Y COMPRIS : (A) TOUT GARANTIE TACITE DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER, DE TITRE DE PROPRIÉTÉ, DE JOUISSANCE PAISIBLE OU D'ABSENCE DE CONTREFAÇON ; ET (B) TOUTE GARANTIE RÉSULTANT D'UNE NÉGOCIATION, DE L'UTILISATION OU DE PRATIQUES COMMERCIALES. DJI NE GARANTIT PAS, SAUF TEL QU'EXPRESSÉMENT STIPULÉ DANS LA GARANTIE LIMITÉE DJI, QUE LE PRODUIT, LES ACCESSOIRES DU PRODUIT, TOUTE PARTIE DU PRODUIT, OU TOUT MATÉRIEL FONCTIONNERONT DE MANIÈRE ININTERROMPUE, SANS RISQUE OU SANS ERREUR, SERONT DÉPOURVUS DE VIRUS OU DE TOUT AUTRE COMPOSANT MALVEILLANT, ET NE GARANTIT PAS QUE DE TELS PROBLÈMES SERONT CORRIGÉS. AUCUN CONSEIL OU INFORMATION, OBTENU PAR VOUS, À L'ORAL OU PAR ÉCRIT, CONCERNANT LE PRODUIT, DES ACCESSOIRES DU PRODUIT OU TOUT MATÉRIEL, NE PEUT CRÉER AUCUNE GARANTIE DE LA PART DE DJI OU LE PRODUIT, AUTRE QUE CELLES EXPRESSÉMENT DÉCRITES DANS LES PRÉSENTES. VOUS ASSUMEZ LA TOTALITÉ DES RISQUES POUR TOUT DOMMAGE POUVANT RÉSULTER DE VOTRE UTILISATION OU DE VOTRE ACCÈS AU PRODUIT, AUX ACCESSOIRES DU PRODUIT ET À TOUT MATÉRIEL. VOUS COMPRENEZ ET RECONNAISSEZ QUE VOUS UTILISEZ LE PRODUIT À VOTRE ENTIÈRE DISCRÉTION ET À VOS PROPRES RISQUES, ET QUE VOUS ÊTES LE SEUL RESPONSABLE DE TOUTE BLESSURE, TOUT DÉCÈS, TOUT DOMMAGE CAUSÉ À VOS BIENS (Y COMPRIS VOTRE SYSTÈME INFORMATIQUE, APPAREIL MOBILE OU MATÉRIEL DJI UTILISÉ EN LIEN AVEC LE PRODUIT) OU AUX BIENS DE TIERS, OU DE TOUTE PERTE DE DONNÉES RÉSULTANT DE VOTRE UTILISATION DU PRODUIT OU DE VOTRE INCAPACITÉ À L'UTILISER. CERTAINES JURIDICTIONS PEUVENT INTERDIRE L'EXCLUSION DE GARANTIES ET VOS DROITS PEUVENT VARIER D'UNE JURIDICTION À L'AUTRE. DJI est une marque commerciale de SZ DJI TECHNOLOGY CO., LTD. (abrégée en « DJI ») et de ses sociétés affiliées. Les noms de produits, de marques, etc., apparaissant dans le présent document sont des marques commerciales ou des marques déposées de leurs détenteurs respectifs. Limitation de responsabilité EN AUCUN CAS, LES ENTITÉS DE DJI NE POURRONT ÊTRE TENUES RESPONSABLES DE TOUT DOMMAGE INDIRECT, ACCIDENTEL, SPÉCIAL, CONSÉCUTIF OU PUNITIF (Y COMPRIS LES DOMMAGES POUR LA PERTE DE PROFITS, LA PERTE DE CLIENTÈLE OU TOUTE AUTRE PERTE INCORPORELLE) RÉSULTANT DE OU RELATIF À VOTRE ACCÈS OU À VOTRE UTILISATION, OU À VOTRE INCAPACITÉ D'ACCÉDER OU D'UTILISER LE PRODUIT, LES ACCESSOIRES DES PRODUITS OU TOUT MATÉRIEL, TOUTE DONNÉE SUR L'ENVIRONNEMENT DE VOL, QUE CE SOIT SUR LA BASE D’UNE GARANTIE, D’UN CONTRAT, D’UN ACTE DÉLICTUEL (Y COMPRIS LA NÉGLIGENCE), D’UN STATUT OU TOUTE AUTRE THÉORIE JURIDIQUE ET QUE L’ENTITÉ DE DJI AIT ÉTÉ INFORMÉE DE LA POSSIBILITÉ DE DOMMAGE OU NON. SAUF ACCORD CONTRAIRE ENTRE VOUS ET DJI, LA RESPONSABILITÉ GLOBALE DES ENTITÉS DJI POUR TOUTES LES RÉCLAMATIONS RÉSULTANTES OU RELATIVES À L'UTILISATION OU À L'IMPOSSIBILITÉ D'UTILISER TOUTE PARTIE DU PRODUIT OU AUTREMENT EN VERTU DE CES MODALITÉS, QU’ELLE SOIT CONTRACTUELLE, DÉLICTUELLE OU AUTRE, EST LIMITÉE À 100 (CENT) DOLLARS ($). Stockage et utilisation des données Lorsque vous utilisez nos applications mobiles, nos produits ou nos autres logiciels, vous pouvez transmettre à DJI les données concernant l'utilisation et le fonctionnement du produit, telles que les données de télémétrie de vol (vitesse, altitude, autonomie de la batterie, informations sur la nacelle et la caméra, etc.) et les enregistrements d'opérations. Pour plus d'informations, consultez la Politique de confidentialité de DJI (disponible sur dji.com/policy).",
                nl: 'Dit product is GEEN speelgoed en is niet geschikt voor kinderen onder de 18 jaar. Volwassenen moeten de drone buiten bereik van kinderen houden en voorzichtigheid betrachten bij het besturen van deze drones in de aanwezigheid van kinderen. Het product maakt gebruik van geavanceerde technologie, en onjuist gebruik van het product kan leiden tot persoonlijk letsel of materiële schade. Lees de bijbehorende documentatie door vóór het eerste gebruik van het product. Deze documenten zijn opgenomen in het productpakket en zijn ook online beschikbaar op de DJI-productpagina op http://www.dji.com. Dit product is een vliegend platform met multirotor dat eenvoudig te besturen is indien het naar behoren wordt gebruikt, zoals hieronder uiteen is gezet. Surf naar http://www.dji.com voor de meest actuele aanwijzingen en waarschuwingen en naar http://knowbeforeyoufly.org/ voor meer informatie over de vliegveiligheid en compliance. De informatie in dit document betreft je veiligheid en je wettelijke rechten en plichten. Lees dit hele document zorgvuldig door om ervoor te zorgen dat je de juiste configuratie toepast vóór het gebruik. Het niet lezen en opvolgen van de instructies en waarschuwingen in dit document kan leiden tot verlies van het product, ernstig letsel voor jou of schade aan je drone. Door dit product te gebruiken, geef je aan dat je deze disclaimer zorgvuldig hebt gelezen en dat je begrijpt en ermee akkoord gaat je te houden aan de hierin gestelde voorwaarden en bepalingen. BEHALVE ZOALS UITDRUKKELIJK BEPAALD IN HET DJI AFTER-SALES-BELEID, BESCHIKBAAR OP (HTTP://WWW.DJI.COM/SERVICE), WORDEN HET PRODUCT EN ALLE MATERIALEN EN CONTENT DIE VIA HET PRODUCT BESCHIKBAAR IS, GELEVERD "AS IS" EN "AS AVAILABLE", ZONDER ENIGE VORM VAN GARANTIE, EXPLICIET OF IMPLICIET. DJI WIJST ALLE GARANTIES VAN WELKE AARD DAN OOK AF, TENZIJ UITDRUKKELIJK VASTGELEGD IN HET DJI AFTER-SALES-BELEID, EXPLICIET OF IMPLICIET, MET BETREKKING TOT HET PRODUCT, PRODUCTACCESSOIRES EN ALLE MATERIALEN, INCLUSIEF: (A) ELKE IMPLICIETE GARANTIE VAN VERKOOPBAARHEID, GESCHIKTHEID VOOR EEN BEPAALD DOEL, EIGENDOM, RUSTIG GENOT OF NIET-INBREUKMAKENDHEID; EN (B) GARANTIES VOORTVLOEIEND UIT TRANSACTIES, GEBRUIK OF HANDEL. DJI GARANDEERT NIET, BEHALVE ZOALS UITDRUKKELIJK BEPAALD IN DE DJI BEPERKTE GARANTIE, DAT HET PRODUCT, DE PRODUCTACCESSOIRES OF ENIG ONDERDEEL VAN HET PRODUCT, OF ALLE MATERIALEN, ONONDERBROKEN EN VEILIG WERKEN, VRIJ ZIJN VAN FOUTEN, VIRUSSEN OF ANDERE SCHADELIJKE COMPONENTEN EN GARANDEERT NIET DAT EEN VAN DEZE PROBLEMEN ZAL WORDEN GECORRIGEERD. GEEN ENKEL ADVIES OF INFORMATIE, MONDELING OF SCHRIFTELIJK, DIE JE HEBT ONTVANGEN VOOR HET PRODUCT, PRODUCTACCESSOIRES OF ENIG MATERIAAL WORDT OPGEVAT ALS EEN GARANTIE BETREFFENDE DJI OF HET PRODUCT ALS DAT NIET UITDRUKKELIJK IS VERMELD IN DEZE VOORWAARDEN. JE AANVAARDT ALLE RISICO\'S VOOR SCHADE DIE KAN VOORTVLOEIEN UIT HET GEBRUIK VAN OF TOEGANG TOT HET PRODUCT, PRODUCTACCESSOIRES EN MATERIALEN. JE BEGRIJPT EN STEMT ERMEE IN DAT JE HET PRODUCT NAAR EIGEN GOEDDUNKEN EN VOOR EIGEN RISICO GEBRUIKT EN DAT JE ZELF VERANTWOORDELIJK BENT VOOR PERSOONLIJK LETSEL, DOOD, SCHADE AAN JE EIGENDOMMEN (WAARONDER JE COMPUTERSYSTEEM OF EEN MOBIEL APPARAAT OF DJI HARDWARE DIE WORDT GEBRUIKT IN VERBAND MET HET PRODUCT) OF EIGENDOMMEN VAN DERDEN, OF HET VERLIES VAN GEGEVENS ALS GEVOLG VAN HET GEBRUIK OF DE ONMOGELIJKHEID TOT GEBRUIK VAN HET PRODUCT. IN SOMMIGE JURISDICTIES KAN HET VERBODEN ZIJN OM GARANTIES AF TE WIJZEN EN JE KUNT ANDERE RECHTEN HEBBEN DIE PER RECHTSGEBIED VERSCHILLEN. DJI is een handelsmerk van SZ DJI TECHNOLOGY CO., LTD. (Afgekort als “DJI”) en haar dochterondernemingen. Namen van producten, merken, enz. in dit document zijn handelsmerken of gedeponeerde handelsmerken van hun respectieve eigenaren. Aansprakelijkheidsbeperking DJI-ENTITEITEN ZIJN IN GEEN GEVAL AANSPRAKELIJK VOOR INDIRECTE, SPECIALE OF INCIDENTELE SCHADE, GEVOLGSCHADE OF SCHADEVERGOEDINGEN (WAARONDER WINSTDERVING, GOODWILL EN ANDERE IMMATERIËLE SCHADE) DIE VOORTKOMEN UIT OF GERELATEERD ZIJN AAN JOUW TOEGANG TOT, GEBRUIK VAN, DAN WEL HET GEBREK AAN TOEGANG TOT OF GEBRUIK VAN HET PRODUCT, PRODUCTACCESSOIRES OF ANDERE MATERIALEN, GEGEVENS OMTRENT DE VLIEGOMGEVING, OP BASIS VAN GARANTIE, CONTRACT, ONRECHTMATIGE DADEN (WAARONDER ONACHTZAAMHEID), WETGEVING, OF ANDERE WETTELIJKE REGELGEVING, EN ONAFHANKELIJK VAN HET FEIT OF EEN DJI-ENTITEIT VAN DE MOGELIJKE SCHADE OP DE HOOGTE IS GESTELD. TENZIJ ANDERSZINS OVEREENGEKOMEN TUSSEN JOU EN DJI, IS DE TOTALE AANSPRAKELIJKHEID VAN DE DJI-ENTITEITEN AAN JOU VOOR ALLE CLAIMS DIE VOORTKOMEN UIT OF GERELATEERD ZIJN AAN DE ONMOGELIJKHEID VAN TOEGANG TOT GEDEELTES VAN HET PRODUCT OF ANDERSZINS ONDER DEZE VOORWAARDEN, ZOWEL OP BASIS VAN HET CONTRACT, ONRECHTMATIGE DADEN OF ANDERSZINS, BEPERKT TOT $100. Dataopslag en gebruik Wanneer je gebruik maakt van onze mobiele apps of onze producten of andere software, kun je gegevens over het gebruik en de werking van het product, zoals vluchttelemetriegegevens (bijv. snelheid, hoogte, accuduur en informatie over de gimbal en camera) en werkingsregistratie delen met DJI. Raadpleeg het DJI Privacybeleid (beschikbaar op dji.com/policy) voor meer informatie.',
                pt: 'Este produto NÃO é um brinquedo e não é adequado para crianças com idade inferior a 18 anos. Os adultos devem manter a aeronave fora do alcance das crianças e ter cuidado quando a utilizarem na presença de crianças. O produto emprega tecnologia avançada, mas a utilização inadequada do produto pode resultar em danos pessoais ou danos materiais. Leia os materiais associados ao produto antes da primeira utilização. Estes documentos estão incluídos na embalagem do produto e também estão disponíveis on-line na página de produto DJI em http://www.dji.com. Este produto é uma plataforma de voo de vários rotores que permite um voo fácil quando em boas condições de funcionamento, conforme estipulado abaixo. Visite http://www.dji.com para conhecer as instruções e os avisos mais atualizados, e http://knowbeforeyoufly.org/ para obter mais informações sobre segurança de voo e a conformidade. As informações contidas neste documento afetam a sua segurança e os seus direitos legais e responsabilidades. Leia este documento cuidadosamente para assegurar uma configuração correta antes da utilização. A ausência de leitura e o incumprimento das instruções e avisos contidos neste documento podem resultar em perda do produto, ferimentos graves no utilizador ou danos na aeronave. A utilização deste produto significa que o utilizador leu cuidadosamente esta declaração de exoneração de responsabilidade e que compreende e aceita cumprir os termos e condições aqui expostos. SALVO CONFORME EXPRESSAMENTE PREVISTO NAS POLÍTICAS PÓS-VENDA DA DJI (DISPONÍVEIS EM HTTP://WWW.DJI.COM/SERVICE), O PRODUTO, TODOS OS MATERIAIS E O CONTEÚDO DISPONIBILIZADO ATRAVÉS DO PRODUTO SÃO FORNECIDOS "TAL COMO ESTÃO" E "CONFORME DISPONÍVEIS", SEM GARANTIA OU CONDIÇÃO DE QUALQUER ESPÉCIE, EXPLÍCITA OU IMPLÍCITA. A DJI NEGA QUALQUER TIPO DE GARANTIA, EXCETO CONFORME EXPRESSAMENTE INDICADO NAS POLÍTICAS PÓS-VENDA DA DJI, QUER EXPRESSAS OU IMPLÍCITAS, RELACIONADAS COM O PRODUTO, OS SEUS ACESSÓRIOS E TODOS OS MATERIAIS, INCLUINDO: (A) QUALQUER GARANTIA IMPLÍCITA DE COMERCIABILIDADE OU ADEQUAÇÃO A UMA DETERMINADA FINALIDADE, TÍTULO, USUFRUTO OU NÃO-VIOLAÇÃO; E (B) QUALQUER GARANTIA RESULTANTE DA MANIPULAÇÃO, UTILIZAÇÃO OU COMERCIALIZAÇÃO. A DJI NÃO GARANTE, EXCETO CONFORME EXPRESSAMENTE INDICADO NA GARANTIA LIMITADA DJI, QUE O PRODUTO, OS SEUS ACESSÓRIOS, QUALQUER PARTE DO PRODUTO OU QUALQUER MATERIAL SERÁ ININTERRUPTO, SEGURO, OU ISENTO DE ERROS, VÍRUS OU OUTROS COMPONENTES NOCIVOS, E NÃO GARANTE QUE QUALQUER UM DESTES PROBLEMAS SERÁ CORRIGIDO. NENHUM CONSELHO OU INFORMAÇÃO, QUER SEJA VERBAL OU ESCRITO, OBTIDO ATRAVÉS DO PRODUTO, DOS SEUS ACESSÓRIOS OU DE QUALQUER MATERIAL IRÁ CRIAR UMA GARANTIA SOBRE A DJI OU O PRODUTO QUE NÃO ESTEJA EXPRESSAMENTE INDICADA NESTES TERMOS. O UTILIZADOR ASSUME TODOS OS RISCOS POR QUAISQUER DANOS QUE POSSAM RESULTAR DA UTILIZAÇÃO OU DO ACESSO A ESTE PRODUTO, AOS SEUS ACESSÓRIOS E A QUAISQUER MATERIAIS. O UTILIZADOR COMPREENDE E CONCORDA QUE A UTILIZAÇÃO DO PRODUTO ESTÁ SOB A SUA INTEIRA RESPONSABILIDADE E PRÓPRIO RISCO, SENDO O ÚNICO RESPONSÁVEL POR QUAISQUER DANOS PESSOAIS, MORTE, DANOS À SUA PROPRIEDADE (INCLUINDO O SEU SISTEMA INFORMÁTICO OU DISPOSITIVO MÓVEL OU HARDWARE DJI UTILIZADO EM LIGAÇÃO COM O PRODUTO) OU PROPRIEDADE DE TERCEIROS, OU A PERDA DE DADOS QUE PODE RESULTAR DA UTILIZAÇÃO OU DA INCAPACIDADE DE UTILIZAR O PRODUTO. ALGUMAS JURISDIÇÕES PODEM PROIBIR A EXCLUSÃO DE RESPONSABILIDADE DE GARANTIAS E O UTILIZADOR PODERÁ TER OUTROS DIREITOS QUE VARIAM CONFORME A JURISDIÇÃO. DJI é uma marca comercial da SZ DJI TECHNOLOGY CO., LTD. (abreviada como "DJI") e suas empresas afiliadas. Todos os nomes de produtos, marcas, etc. incluídos no presente documento são marcas comerciais ou marcas comerciais registadas das respetivas empresas detentoras. Limitação de responsabilidade EM CIRCUNSTÂNCIA ALGUMA AS ENTIDADES DA DJI SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, ACIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS (INCLUINDO DANOS POR PERDA DE LUCRO, GOODWILL OU QUALQUER OUTRA PERDA INTANGÍVEL) RESULTANTES OU RELACIONADOS COM O ACESSO OU UTILIZAÇÃO, OU COM A IMPOSSIBILIDADE DE ACESSO OU UTILIZAÇÃO DO PRODUTO, ACESSÓRIOS DO PRODUTO OU QUAISQUER MATERIAIS, DADOS DE AMBIENTE DE VOO POR PARTE DO UTILIZADOR, QUER ESTEJAM INTEGRADOS NA GARANTIA, CONTRATO, ATOS ILÍCITOS (INCLUINDO NEGLIGÊNCIA), ESTATUTO OU QUALQUER OUTRA TEORIA LEGAL, E INDEPENDENTEMENTE DE ALGUMA ENTIDADE DA DJI TER SIDO INFORMADA, OU NÃO, DA POSSIBILIDADE DE DANOS. EXCETO QUANDO ACORDADO EM CONTRÁRIO ENTRE O UTILIZADOR E A DJI, A RESPONSABILIDADE TOTAL DAS ENTIDADES DA DJI PARA COM O UTILIZADOR NO QUE CONCERNE A RECLAMAÇÕES RESULTANTES OU RELACIONADAS COM A UTILIZAÇÃO OU COM A IMPOSSIBILIDADE DE UTILIZAÇÃO DE QUALQUER PARTE DO PRODUTO OU AO ABRIGO DESTES TERMOS, QUER ESTEJA INTEGRADA EM CONTRATOS, ATOS ILÍCITOS OU DE OUTRA FORMA, É LIMITADA A 100$. Armazenamento e utilização de dados Quando utilizar as nossas aplicações para dispositivos móveis, os nossos produtos ou outro software, poderá fornecer à DJI os dados sobre a utilização e funcionamento do produto, como dados de telemetria do voo (por ex., velocidade, altitude, vida útil da bateria e informações sobre a suspensão cardã e a câmara) e os registos das operações. Consulte a Política de Privacidade da DJI (disponível em dji.com/policy) para obter mais informações.',
                ru: 'Данный продукт НЕ является игрушкой и не предназначен для лиц младше 18 лет. Дрон должен храниться в местах, недоступных для детей. В присутствии детей полеты следует выполнять с особой осторожностью. Несмотря на высокотехнологичность продукта его ненадлежащее использование может привести к травмам или повреждению имущества. Перед использованием ознакомьтесь с материалами, относящимися к работе продукта. Эти документы содержатся в комплекте поставки продукта, а также находятся на странице продукта DJI на сайте http://www.dji.com. Данный продукт представляет собой многовинтовой летающий аппарат. Его легко использовать, если он находится в хорошем рабочем состоянии (описано ниже). Посетите сайт http://www.dji.com для ознакомления с самыми свежими инструкциями и предупреждениями и сайт http://knowbeforeyoufly.org/ для получения более подробной информации о безопасности полетов и соответствии требованиям. Информация, содержащаяся в этом документе, затрагивает вашу безопасность, законные права и обязанности. Внимательно ознакомьтесь с данным документом перед использованием продукта. Отказ от ознакомления и выполнения инструкций и предупреждений, содержащихся в этом документе, может стать причиной потери продукта, получения вами серьезных травм или повреждения вашего дрона. Используя данный продукт, вы подтверждаете, что внимательно ознакомились с заявлением об отказе от ответственности и соглашаетесь выполнять правила и условия настоящего документа. КРОМЕ ЯВНЫМ ОБРАЗОМ ПРЕДУСМОТРЕННОГО В ПРАВИЛАХ ПОСЛЕПРОДАЖНОГО ОБСЛУЖИВАНИЯ DJI (HTTP://WWW.DJI.COM/SERVICE), ПРОДУКТ И ВСЕ ДОСТУПНЫЕ МАТЕРИАЛЫ ПРЕДОСТАВЛЕНЫ «КАК ЕСТЬ» И «В СУЩЕСТВУЮЩЕМ СОСТОЯНИИ» БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ ИЛИ УСЛОВИЙ, ЯВНО ВЫРАЖЕННЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ. ЗА ИСКЛЮЧЕНИЕМ ГАРАНТИЙ, ЯВНЫМ ОБРАЗОМ ПРЕДУСМОТРЕННЫХ В ПРАВИЛАХ ПОСЛЕПРОДАЖНОГО ОБСЛУЖИВАНИЯ DJI, КОМПАНИЯ DJI НЕ ПРЕДОСТАВЛЯЕТ НИКАКИХ ДРУГИХ ГАРАНТИЙ, ЯВНО ВЫРАЖЕННЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ОТНОСЯЩИХСЯ К ПРОДУКТУ, АКСЕССУАРАМ ПРОДУКТА И ВСЕМ МАТЕРИАЛАМ, ВКЛЮЧАЯ СЛЕДУЮЩЕЕ: (A) ЛЮБАЯ ПОДРАЗУМЕВАЕМАЯ ГАРАНТИЯ ОТНОСИТЕЛЬНО КОММЕРЧЕСКОЙ ПРИГОДНОСТИ, СООТВЕТСТВИЯ НАЗНАЧЕНИЮ, НАЗВАНИЯ, БЕСПРЕПЯТСТВЕННОГО ПОЛЬЗОВАНИЯ, ОТСУТСТВИЯ НАРУШЕНИЙ ПРАВ ИНТЕЛЛЕКТУАЛЬНОЙ СОБСТВЕННОСТИ; И (Б) ЛЮБАЯ ГАРАНТИЯ, ВОЗНИКАЮЩАЯ В РЕЗУЛЬТАТЕ ЭКСПЛУАТАЦИИ, ДЕЛОВЫХ ОПЕРАЦИЙ ИЛИ КОММЕРЧЕСКОГО ИСПОЛЬЗОВАНИЯ. ЗА ИСКЛЮЧЕНИЕМ ГАРАНТИЙ, ЯВНЫМ ОБРАЗОМ ПРЕДУСМОТРЕННЫХ В ОГРАНИЧЕННОЙ ГАРАНТИИ DJI, КОМПАНИЯ DJI НЕ ПРЕДОСТАВЛЯЕТ НИКАКИХ ДРУГИХ ГАРАНТИЙ, ЧТО ПРОДУКТ, АКСЕССУАРЫ ПРОДУКТА, ЛЮБАЯ ЧАСТЬ ПРОДУКТА ИЛИ ЛЮБЫЕ МАТЕРИАЛЫ БУДУТ ПОСТОЯННО И БЕЗОПАСНО РАБОТАТЬ, НЕ БУДУТ СОДЕРЖАТЬ НЕИСПРАВНОСТЕЙ, ВИРУСОВ ИЛИ ДРУГИХ ВРЕДНЫХ КОМПОНЕНТОВ, А ТАКЖЕ НЕ ПРЕДОСТАВЛЯЕТ ГАРАНТИЙ ТОГО, ЧТО ЛЮБАЯ ИЗ ЭТИХ ПРОБЛЕМ БУДЕТ ИСПРАВЛЕНА. НИКАКИЕ РЕКОМЕНДАЦИИ И ИНФОРМАЦИЯ, В УСТНОЙ ИЛИ ПИСЬМЕННОЙ ФОРМЕ, ПОЛУЧЕННЫЕ ВАМИ ПРИ ИСПОЛЬЗОВАНИИ ПРОДУКТА, АКСЕССУАРОВ ПРОДУКТА ИЛИ ЛЮБЫХ МАТЕРИАЛОВ, НЕ ЯВЛЯЮТСЯ ОСНОВАНИЕМ ПРЕДОСТАВЛЕНИЯ ГАРАНТИИ, ОТНОСЯЩЕЙСЯ К DJI ИЛИ ПРОДУКТУ, ЗА ИСКЛЮЧЕНИЕМ ГАРАНТИЙ, ЯВНЫМ ОБРАЗОМ ПРЕДУСМОТРЕННЫХ В ЭТИХ УСЛОВИЯХ. ВЫ ПРИНИМАЕТЕ НА СЕБЯ ВСЮ ОТВЕТСТВЕННОСТЬ ЗА ЛЮБЫЕ ПОВРЕЖДЕНИЯ, КОТОРЫЕ МОГУТ ВОЗНИКНУТЬ В РЕЗУЛЬТАТЕ ИСПОЛЬЗОВАНИЯ ПРОДУКТА, АКСЕССУАРОВ ПРОДУКТА ИЛИ ЛЮБЫХ МАТЕРИАЛОВ ИЛИ ВАШЕГО ДОСТУПА К НИМ. ВЫ ПОНИМАЕТЕ И СОГЛАШАЕТЕСЬ, ЧТО ИСПОЛЬЗУЕТЕ ПРОДУКТ ПО ВАШЕМУ СОБСТВЕННОМУ УСМОТРЕНИЮ И НА ВАШ РИСК И ЧТО ВЫ САМОСТОЯТЕЛЬНО НЕСЕТЕ ОТВЕТСТВЕННОСТЬ ЗА ЛЮБЫЕ ТРАВМЫ, СМЕРТЬ, УЩЕРБ ВАШЕМУ ИМУЩЕСТВУ (ВКЛЮЧАЯ КОМПЬЮТЕРНУЮ СИСТЕМУ, МОБИЛЬНОЕ УСТРОЙСТВО ИЛИ АППАРАТНОЕ ОБЕСПЕЧЕНИЕ DJI, ПОДКЛЮЧАЕМЫЕ К ПРОДУКТУ) ИЛИ ИМУЩЕСТВУ ТРЕТЬИХ ЛИЦ, И ЗА ПОТЕРЮ ДАННЫХ, ПРОИЗОШЕДШИЕ В РЕЗУЛЬТАТЕ ИСПОЛЬЗОВАНИЯ ВАМИ ИЛИ НЕВОЗМОЖНОСТИ ИСПОЛЬЗОВАНИЯ ВАМИ ПРОДУКТА. НЕКОТОРЫЕ ЮРИСДИКЦИИ МОГУТ ИСКЛЮЧАТЬ ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ, И ВЫ МОЖЕТЕ ИМЕТЬ ДРУГИЕ ПРАВА, В ЗАВИСИМОСТИ ОТ КОНКРЕТНОЙ ЮРИСДИКЦИИ. DJI является товарным знаком компании SZ DJI TECHNOLOGY CO., LTD. (сокращенно "DJI") и ее дочерних компаний. Названия продуктов, торговых марок и т. д., содержащиеся в данном документе, являются товарными знаками или зарегистрированными товарными знаками соответствующих владельцев компаний. Ограничение ответственности ЮРИДИЧЕСКИЕ ЛИЦА DJI НИ ПРИ КАКИХ УСЛОВИЯХ НЕ НЕСУТ ПЕРЕД ВАМИ ОТВЕТСТВЕННОСТИ ЗА ЛЮБЫЕ КОСВЕННЫЕ, СЛУЧАЙНЫЕ, СПЕЦИАЛЬНЫЕ, ПОСЛЕДУЮЩИЕ ИЛИ ШТРАФНЫЕ УБЫТКИ (ВКЛЮЧАЯ УБЫТКИ В СВЯЗИ С ПОТЕРЕЙ ПРИБЫЛИ, УЩЕРБОМ РЕПУТАЦИИ ФИРМЫ ИЛИ ДРУГИЕ НЕМАТЕРИАЛЬНЫЕ УБЫТКИ), ВОЗНИКАЮЩИЕ ВСЛЕДСТВИЕ ИЛИ В СВЯЗИ С ИСПОЛЬЗОВАНИЕМ ВАМИ ИЛИ ВАШИМ ДОСТУПОМ (ИЛИ НЕВОЗМОЖНОСТЬЮ ИСПОЛЬЗОВАНИЯ ИЛИ ПОЛУЧЕНИЯ ДОСТУПА) К ПРОДУКЦИИ, АКСЕССУАРАМ ДЛЯ ПРОДУКЦИИ ИЛИ КАКИМ-ЛИБО МАТЕРИАЛАМ И ПОЛЕТНЫМ ДАННЫМ, БУДЬ ТО ПО ГАРАНТИИ, ДОГОВОРУ, В СВЯЗИ С НАРУШЕНИЕМ ПРАВИЛ ЭКСПЛУАТАЦИИ (ВКЛЮЧАЯ НАРУШЕНИЯ ПО НЕБРЕЖНОСТИ), ПРАВОВЫХ ИЛИ КАКИХ-ЛИБО ДРУГИХ ЮРИДИЧЕСКИХ НОРМ, И НЕЗАВИСИМО ОТ ТОГО, БЫЛО ЛИ КАКОЕ-ЛИБО ЮРИДИЧЕСКОЕ ЛИЦО DJI ПРОИНФОРМИРОВАНО О ВОЗМОЖНОСТИ ПОВРЕЖДЕНИЙ. ЗА ИСКЛЮЧЕНИЕМ СЛУЧАЕВ, КОГДА МЕЖДУ ВАМИ И DJI ЗАКЛЮЧЕНО СОГЛАШЕНИЕ С ДРУГИМИ УСЛОВИЯМИ, СОВОКУПНАЯ ОТВЕТСТВЕННОСТЬ ЮРИДИЧЕСКИХ ЛИЦ DJI ПЕРЕД ВАМИ ПО ВСЕМ ПРЕТЕНЗИЯМ, ВОЗНИКАЮЩИМ ВСЛЕДСТВИЕ ИЛИ В СВЯЗИ С ИСПОЛЬЗОВАНИЕМ КАКОЙ-ЛИБО ЧАСТИ ПРОДУКЦИИ И ИНОГО ОБОРУДОВАНИЯ СОГЛАСНО ДАННЫМ ПОЛОЖЕНИЯМ, БУДЬ ТО ПО ДОГОВОРУ, В СВЯЗИ С НАРУШЕНИЕМ ПРАВИЛ ЭКСПЛУАТАЦИИ И ДРУГИМИ ПРИЧИНАМИ, ОГРАНИЧИВАЕТСЯ 100 ДОЛЛАРАМИ США. Хранение и использование данных При использовании наших мобильных приложений, продуктов или другого программного обеспечения, телеметрические полетные данные (например, скорость, высота, состояние аккумулятора, информация о стабилизаторе и камере) и эксплуатационные записи могут быть предоставлены DJI. Более подробная информация приведена в политике конфиденциальности DJI (dji.com/policy).'
            },
            rchangeconfirm: {
                "zh-cn": "更改RC类型需要重新校准，现在去校准？",
                en: "Calibration is required when replacing a new remote controller. Calibrating now?",
                jp: "新しい送信機に交換する場合、キャリブレーションが必要です。",
                it: "Quando si sostituisce un radiocomando è necessaria una calibrazione.",
                de: "Beim Austausch der Fernbedienung ist eine erneute Kalibrierung nötig.",
                es: "Es necesario efectuar la calibración cada vez que se emplea un nuevo control remoto.",
                fr: "Un étalonnage est requis lors du remplacement de la radiocommande.",
                nl: "Kalibratie is nodig wanneer de afstandsbediening wordt vervangen door een nieuwe.",
                pt: "É necessário calibrar em caso de substituição por um telecomando novo.",
                ru: "При замене пульта дистанционного управления необходимо выполнить калибровку нового пульта."
            },
            HorizontalPositionGain: {
                "zh-cn": "水平位置感度",
                en: "Horizontal Position Gain",
                jp: "水平位置ゲイン",
                it: "Posizione Orizzontale del Gain",
                de: "Verstärkung Horizontalposition",
                es: "Ganancia de posición horizontal",
                fr: "Gain de position horizontale",
                nl: "Toename horizontale positie",
                pt: "Ganho de posição horizontal",
                ru: "Чувствительность регулировки горизонтального положения"
            },
            HorizontalVelocityGain: {
                "zh-cn": "水平速度感度",
                en: "Horizontal Velocity Gain",
                jp: "水平速度ゲイン",
                it: "Velocità Orizzontale del Gain",
                de: "Verstärkung Horizontalgeschwindigkeit",
                es: "Ganancia de velocidad horizontal",
                fr: "Gain de position verticale",
                nl: "Toename horizontale snelheid",
                pt: "Ganho de velocidade horizontal",
                ru: "Чувствительность регулировки горизонтальной скорости"
            },
            fullscreen: {
                "zh-cn": "全屏",
                en: "Fullscreen",
                jp: "全画面",
                it: "Schermo intero",
                de: "Vollbild",
                es: "Pantalla completa",
                fr: "Plein écran",
                nl: "Beeldvullend",
                pt: "Ecrã total",
                ru: "Режим полного экрана"
            },
            noFightLogs: {
                "zh-cn": "无记录",
                en: "No Fight Logs",
                jp: "フライトログなし",
                it: "Nessun registro di volo",
                de: "Keine Flugprotokolle",
                es: "Sin registros de vuelo",
                fr: "Aucun journal de vol",
                nl: "Geen vluchtregistraties",
                pt: "Sem registos de voo",
                ru: "Полетные записи отсутствуют"
            },
            stopCalibration: {
                "zh-cn": "停止标定",
                en: "Stop Calibration",
                jp: "キャリブレーションを停止します。",
                it: "Interrompere calibrazione",
                de: "Kalibrierung anhalten",
                es: "Detener calibración",
                fr: "Arrêter l'étalonnage",
                nl: "Kalibratie stoppen",
                pt: "Para calibragem",
                ru: "Остановить калибровку"
            },
            activatetit: {
                "zh-cn": "激活您的A3/A3 Pro",
                en: "ACTIVATE YOUR A3 /A3 Pro",
                jp: "A3 /A3 Proを起動します。",
                it: "ATTIVARE L'A3 /A3 Pro",
                de: "AKTIVIEREN SIE IHRE A3 /A3 Pro",
                es: "ACTIVE SU A3 /A3 Pro",
                fr: "ACTIVEZ VOTRE A3 /A3 Pro",
                nl: "UW A3 /A3 PRO ACTIVEREN",
                pt: "ATIVE O SEU A3/A3 Pro",
                ru: "АКТИВИРУЙТЕ A3 /A3 Pro"
            },
            activatedesc: {
                "zh-cn": "首次使用A3/A3 PRO时，需要对产品进行激活。激活后，您将获得1年的保修。",
                en: "Activate your A3/A3 PRO when you first connect it to the app. Doing so will also activate your 1-year warranty.",
                jp: "初めてアプリに接続する場合、 A3/A3 PROを起動してください。そうすることで１年間の保証が有効になります。",
                it: "Attivare l'A3 /A3 Pro al primo collegamento con l'app. Così facendo attiverete la vostra garanzia di 1 anno.",
                de: "Aktivieren Sie Ihre A3/A3 PRO, wenn Sie die Verbindung zur App herstellen. Dabei wird auch Ihre 1-Jahres-Garantie aktiviert.",
                es: "Active su A3/A3 PRO la primera vez que lo conecte a la aplicación. Al hacerlo activará su garantía de un año.",
                fr: "Activez votre A3/A3 PRO lors de sa première connexion à l'application. Cette opération activera également votre garantie d'un (1) an.",
                nl: "Activeer uw A3/A3 PRO wanneer u deze voor de eerste keer verbindt met de app. Uw 1-jarige garantie wordt dan ook meteen geactiveerd.",
                pt: "Ative o seu A3/A3 PRO quando o ligar à aplicação pela primeira vez. Ao fazê-lo, irá também ativar a sua garantia de 1 ano.",
                ru: "Активируйте свой A3/A3 PRO при первом подключении к приложению. При этом также будет активирована ваша гарантия сроком на 1 год."
            },
            Startactivation: {
                "zh-cn": "开始激活",
                en: "Start Activation",
                jp: "有効化を開始します。",
                it: "Avvio attivazione",
                de: "Aktivierung starten",
                es: "Iniciar activación",
                fr: "Lancer l'activation",
                nl: "Activering starten",
                pt: "Iniciar a ativação",
                ru: "Начать активацию"
            },
            Temporarilyactivated: {
                "zh-cn": "暂不激活",
                en: "Activate Later",
                jp: "後で有効化します。",
                it: "Attivare più tardi",
                de: "Später aktivieren",
                es: "Activar más tarde",
                fr: "Activer ultérieurement",
                nl: "Later activeren",
                pt: "Ativar mais tarde",
                ru: "Активировать позже"
            },
            ChangeAccount: {
                "zh-cn": "更改账号",
                en: "Change Account",
                jp: "アカウントを変更します。",
                it: "Cambio account",
                de: "Konto wechseln",
                es: "Cambiar cuenta",
                fr: "Changer de compte",
                nl: "Account wijzigen",
                pt: "Alterar a conta",
                ru: "Изменить учетную запись"
            },
            activatedesc2: {
                "zh-cn": "您的A3/A3 PRO信息将与该账号绑定。绑定后该账号信息将作为保修凭证，请确保账户信息正确。",
                en: "A3/A3 PRO’s information will be bound to this account and served as proof of your warranty. Confirm the account is correct."
            },
            confirmacc: {
                "zh-cn": "确认您的账号",
                en: "Confirm Your Account",
                jp: "アカウントを確認してください。",
                it: "Confermare il vostro account",
                de: "Konto bestätigen",
                es: "Confirme su cuenta",
                fr: "Confirmer votre compte",
                nl: "Uw account bevestigen",
                pt: "Confirmar a sua conta",
                ru: "Подтвердите учетную запись"
            },
            activating: {
                "zh-cn": "正在激活",
                en: "Activating",
                jp: "有効化を行っています。",
                it: "Attivazione in corso",
                de: "Wird aktiviert",
                es: "Activando...",
                fr: "Activation",
                nl: "Activeren",
                pt: "Ativar",
                ru: "Активация"
            },
            activatefail: {
                "zh-cn": "激活失败",
                en: "Activation Failed",
                jp: "有効化に失敗しました。",
                it: "Attivazione non riuscita",
                de: "Aktivierung fehlgeschlagen",
                es: "La activación ha fallado",
                fr: "Échec de l'activation",
                nl: "Activering mislukt",
                pt: "A ativação falhou",
                ru: "Сбой активации"
            },
            activatesuccess: {
                "zh-cn": "激活成功",
                en: "Activation Success",
                jp: "有効化完了",
                it: "Attivazione completata con successo",
                de: "Aktivierung erfolgreich",
                es: "Activación correcta",
                fr: "Activation réussie",
                nl: "Activering voltooid",
                pt: "Ativação bem-sucedida",
                ru: "Активация выполнена успешно"
            },
            actresult1: {
                "zh-cn": "正在激活。",
                en: "Activating",
                jp: "有効化を行っています。",
                it: "Attivazione in corso",
                de: "Wird aktiviert",
                es: "Activando...",
                fr: "Activation",
                nl: "Activeren",
                pt: "Ativar",
                ru: "Активация"
            },
            actresult2: {
                "zh-cn": "激活失败，请重试。",
                en: "Activation Failed. Please retry.",
                jp: "有効化に失敗しました。やり直してください。",
                it: "Attivazione non riuscita, riprovare.",
                de: "Aktivierung fehlgeschlagen, bitte erneut versuchen.",
                es: "La activación ha fallado; inténtelo de nuevo",
                fr: "Échec de l'activation, réessayez.",
                nl: "Activering mislukt. Probeer het opnieuw.",
                pt: "A ativação falhou, tente novamente.",
                ru: "Сбой активации, повторите попытку."
            },
            Reactivate: {
                "zh-cn": "重新激活",
                en: "Reactivate",
                jp: "再度有効化します。",
                it: "Riattivare",
                de: "Reaktivieren",
                es: "Reactivar",
                fr: "Réactiver",
                nl: "Opnieuw activeren",
                pt: "Reativar",
                ru: "Активировать повторно"
            },
            networkissue: {
                "zh-cn": "连接超时，请检查您的网络连接状态。",
                en: "Connection Timeout. Check your network.",
                jp: "接続タイムアウト。ネットワークを確認してください。",
                it: "Connessione scaduta. Controllare la rete.",
                de: "Zeitüberschreitung beim Aufbau der Verbindung. Prüfen Sie Ihr Netzwerk.",
                es: "Se ha superado el tiempo de espera de conexión. Compruebe su red.",
                fr: "Expiration de la connexion. Vérifiez votre connexion réseau.",
                nl: "Verbinding verbroken. Controleer uw netwerk.",
                pt: "Tempo esgotado na ligação. Verifique a sua rede.",
                ru: "Время соединения истекло. Проверьте сеть."
            },
            tipsairframe: {
                "zh-cn": "* 蓝色图标的螺旋桨安装在上方，红色螺旋桨安装在下方。",
                en: "* Blue propeller is installed on the top while red propeller is below.",
                jp: "* 青のプロペラは上に、赤のプロペラは下に取り付けます。",
                it: "* L'elica blu è installata sulla parte superiore mentre l'elica rossa è in basso.",
                de: "* Der blaue Propeller ist oben montiert und der rote Propeller darunter.",
                es: "* La hélice azul se instala por encima, y la roja por debajo.",
                fr: "* L'hélice bleue est installée en haut et l'hélice rouge en bas.",
                nl: "* De blauwe propeller is bovenop geïnstalleerd en de rode propeller onderop.",
                pt: "* A hélice azul está instalada na parte superior, enquanto a hélice vermelha está na parte inferior.",
                ru: "* Синий винт установлен сверху, а красный винт — снизу."
            },
            tipsmounting: {
                "zh-cn": "* 请填写模块安装方向，以及模块安装位置相对于机架重心的偏移量数值。",
                en: "* Fill in the values of offset to the center of the mass of the aircraft and the direction of the installation.",
                jp: "機体の質量の中心に対する補正値と取付け方向を入力してください。",
                it: "* Compilare i valori di offset rispetto al centro della massa del velivolo e alla direzione dell'installazione.",
                de: "* Die Werte für den Versatz zum Massezentrum der Drohne und die Einbaurichtung eingeben.",
                es: "* Introduzca los valores de desplazamiento respecto del centro de masas de la aeronave y la dirección de la instalación.",
                fr: "* Renseignez les valeurs de décalage du centre de masse de l'appareil, ainsi que le sens d'installation.",
                nl: "* Vul de waarden van offset naar het centrum van de massa van het vliegtuig en de richting van de installatie in.",
                pt: "* Preencha os valores de desvio em relação ao centro da massa da aeronave e a direção de instalação.",
                ru: "* Введите значения смещения к центру масс летательного аппарата и направление установки."
            },
            tipsesc: {
                "zh-cn": "* 请依次点击M1，M2，M3......图标以进行电机测试。",
                en: "* Click M1, M2, M3... Icons one by one to start motor test.",
                jp: "M1、M2、M3・・アイコンを一つずつクリックしてモーターテストを開始します。",
                it: "* Fare clic sulle icone M1, M2, M3... in successione per iniziare il test del motore.",
                de: "* Die Symbole M1, M2, M3... einzeln anklicken, um den Motortest zu starten.",
                es: "* Haga clic en los iconos M1, M2, M3... uno por uno para iniciar la prueba de motores.",
                fr: "* Cliquez sur les icônes M1, M2, M3... l'une après l'autre pour lancer le test du moteur.",
                nl: "* Klik op M1, M2, M3... om de motortest te starten.",
                pt: "* Clique nos ícones M1, M2, M3... um a um para iniciar o teste do motor.",
                ru: "* Нажмите значки M1, M2, M3... поочередно, чтобы начать проверку двигателя."
            },
            tipsesc2: {
                "zh-cn": "确保电机转动方向与图示方向一致。",
                en: "Ensure the motor is rotating in the direction is as the figure shown below.",
                jp: "以下の図に示す方向にモーターが回転していることを確認します。",
                it: "Assicurarsi che il motore ruoti nella direzione indicata dalla figura in basso.",
                de: "Sicherstellen, dass der Motor in der unten gezeigten Richtung dreht (siehe Abb.).",
                es: "Asegúrese de que el motor gira en la dirección indicada en la figura siguiente.",
                fr: "Vérifiez que le moteur tourne dans le sens indiqué sur la figure ci-dessous.",
                nl: "Controleer of de motor in de richting draait zoals afgebeeld.",
                pt: "Certifique-se de que o motor está a rodar no mesmo sentido que a figura apresentada abaixo.",
                ru: "Убедитесь в том, что двигатель вращается в направлении, указанном на рисунке внизу."
            },
            tipsioc: {
                "zh-cn": "* 选择使用功能模式时是进入航向锁定或返航点锁定。",
                en: "* Choose Course Lock or Home Lock to enable in F Mode.",
                jp: " Fモードでコースロックまたはホームロックを選択して有効にします。",
                it: "* Scegliere Course Lock (Blocco orientamento) o Home Lock (Blocco posizione iniziale) per attivare la modalità F.",
                de: "* Course Lock oder Home Lock für den Modus „F“ auswählen.",
                es: "* Seleccione Bloqueo de rumbo o Bloqueo de origen para activar en Modo F.",
                fr: "* Sélectionnez Verrouillage de trajectoire ou Verrouillage du point de départ pour activer le mode F.",
                nl: "* Kies Routevergrendeling of Basisvergrendeling om in te schakelen in F-modus.",
                pt: "* Escolher Bloqueio de curso ou Bloqueio de posição inicial para ativar no modo F.",
                ru: "* Выберите фиксацию курса или фиксацию домашней точки, чтобы активировать режим F Mode."
            },
            tipstopology1: {
                "zh-cn": "* 点击模块图标可查看详细信息。",
                en: "* Click on the module to learn more.",
                jp: "モデュ―ルをクリックして詳細を確認します。",
                it: "* Per saperne di più fare clic sul modulo.",
                de: "* Um mehr zu erfahren, das Modul anklicken.",
                es: "* Haga clic en el módulo para obtener más información.",
                fr: "* Cliquez sur le module pour plus d'informations.",
                nl: "* Klik op een module voor meer informatie.",
                pt: "* Clique no módulo para saber mais.",
                ru: "* Нажмите на модуль, чтобы получить больше информации."
            },
            tipstopology2: {
                "zh-cn": "* 首次使用新GPS模块时，需要重置GPS模块安装信息。",
                en: "* Reset mounting information when replacing a new GPS module.",
                jp: "*新しいGPSモデュ―ルに交換する場合、取付け情報をリセットしてください。",
                it: "* Resettare le informazioni di montaggio quando si sostituisce un nuovo modulo GPS.",
                de: "* Einbauinformationen beim Austausch des GPS-Moduls zurücksetzen.",
                es: "* Restablezca la información de montaje cuando sustituya el módulo GPS por uno nuevo.",
                fr: "* Réinitialisez les informations de montage lors du remplacement du module GPS.",
                nl: "* Reset de montagegegevens wanneer u de GPS-module vervangt door een nieuwe.",
                pt: "* Repor as informações de montagem no caso de colocação de um módulo GPS.",
                ru: "* При установке нового модуля GPS сбросьте информацию о креплении."
            },
            TipsIndex: {
                "zh-cn": "帮助首页",
                en: "Index",
                jp: "インデックス",
                it: "Indice",
                de: "Index",
                es: "Índice",
                fr: "Index",
                nl: "Inhoud",
                pt: "Índice",
                ru: "Указатель"
            },
            degree: {
                "zh-cn": "度",
                en: "degree",
                jp: "度",
                it: "grado",
                de: "Grad",
                es: "grado",
                fr: "degré",
                nl: "graad",
                pt: "grau",
                ru: "градус"
            },
            StickMonitorUSA: {
                "zh-cn": "美国手",
                en: "Mode 2",
                jp: "Mode 2",
                it: "Modalità 2",
                de: "Modus 2",
                es: "Modo 2",
                fr: "Mode 2",
                nl: "Modus 2",
                pt: "Modo 2",
                ru: "Режим 2"
            },
            agree: {
                "zh-cn": "同意",
                en: "Agree",
                jp: "同意します。",
                it: "Accetto",
                de: "Stimme zu",
                es: "Acepto",
                fr: "Accepter",
                nl: "Akkoord",
                pt: "Aceito",
                ru: "Согласен"
            },
            disclaimer: {
                "zh-cn": "免责声明与警告",
                en: "Disclaimer and Warning",
                jp: "免責事項および警告",
                it: "Limitazioni di responsabilità e avvertimenti",
                de: "Haftungsausschluss und Warnhinweis",
                es: "Renuncia de responsabilidad y advertencia",
                fr: "Clause d'exclusion de responsabilité et mise en garde",
                nl: "Disclaimer en waarschuwing",
                pt: "Isenção de responsabilidade e aviso",
                ru: "Заявление об отказе от ответственности и предупреждение"
            },
            rangetips1: {
                "zh-cn": "* 范围为：",
                en: "* The range is from:",
                jp: "*範囲は～からです。",
                it: "* L'intervallo è da",
                de: "* Der Bereich gilt von",
                es: "* El rango oscila entre",
                fr: "* La plage est comprise entre",
                nl: "* Het bereik is van",
                pt: "* A gama estende-se de",
                ru: "* Диапазон от "
            },
            rangetips2: {
                "zh-cn": "至",
                en: "to",
                jp: "まで",
                it: "a",
                de: "bis",
                es: "y",
                fr: "et",
                nl: "tot",
                pt: "a",
                ru: "до"
            },
            CurrentVoltage: {
                "zh-cn": "当前电压",
                en: "Current Voltage",
                jp: "現在の電圧",
                it: "Tensione attuale",
                de: "Istspannung",
                es: "Tensión actual",
                fr: "Tension actuelle",
                nl: "Huidig voltage",
                pt: "Tensão de corrente",
                ru: "Текущее напряжение"
            },
            mountingForward: {
                "zh-cn": "向前",
                en: "Forward",
                jp: "前方",
                it: "In avanti",
                de: "Vorwärts",
                es: "Adelante",
                fr: "Avant",
                nl: "Vooruit",
                pt: "Para a frente",
                ru: "Вперед"
            },
            mountingBackward: {
                "zh-cn": "向后",
                en: "Backward",
                jp: "後方",
                it: "Indietro",
                de: "Rückwärts",
                es: "Atrás",
                fr: "Arrière",
                nl: "Achteruit",
                pt: "Para trás",
                ru: "Назад"
            },
            IMUDirection: {
                "zh-cn": "安装方向",
                en: "Installation Direction"
            },
            mc_manual_dis_warning: {
                "zh-cn": "您正在修改飞行模式至手动模式，使用手动模式飞行将无法获取飞行高度与姿态增稳功能，在此我们郑重提醒：您将对此次修改承担一切法律责任。大疆创新及其关联公司和分支机构不会对在此之后的任何事故负责，无论是合同上的还是法律上的。",
                en: "You are entering Manual Mode. The aircraft cannot stabilize its altitude and attitude in Manual Mode. You are solely responsible and liable for the operation of the aircraft after altering these settings. DJI and its affiliates shall not be liable for any damages, whether in contract, tort (including negligence), or any other legal or equitable theory.",
                jp: "手動モードに入ろうとしています。手動モードでは、機体は高度と姿勢を安定させることができません。これらの設定を変更した後、機体の操作については、お客様が単独で法的なものも含め責任を負うことになります。 DJIおよび関連会社は、契約、（過失を含む）不法行為、その他法理論にかかわらず損害に関し一切の法的責任を負いません。",
                it: "State per entrare in modalità manuale. Il velivolo non può stabilizzare la sua altitudine e il suo assetto nella modalità manuale. Una volta alterate queste impostazioni, sarete Voi i soli responsabili del funzionamento del velivolo. DJI e le sue affiliate non sono ritenute responsabilli di qualsiasi danno, sia per contratto, illecito civile (inclusa negligenza), o per qualunque altra teoria giuridica o equivalente.",
                de: "Sie aktivieren den manuellen Modus. Im manuellen Modus kann die Drohne ihre Höhe und Fluglage nicht stabilisieren. Nach den Änderungen an diesen Einstellungen sind Sie allein für den Betrieb der Drohne verantwortlich und haftbar. DJI und alle Tochtergesellschaften übernehmen keine Haftung für Kosten, die bei Vertragsbruch oder einem anderen Vergehen (auch Fahrlässigkeit) oder anderen rechtlichen oder gesetzlichen Umständen entstehen.",
                es: "Está entrando en modo manual. La aeronave no puede estabilizar su altitud y actitud en modo manual. Como usuario, es el único responsable y asume completamente las consecuencias del funcionamiento de la aeronave tras la modificación de estos ajustes. DJI y sus filiales no se responsabilizarán de ningún daño, ya sea en contrato, agravio (incluida la negligencia) o en virtud de cualquier otra teoría conforme a derecho o equidad.",
                fr: "Vous passez en mode manuel. L'appareil ne peut pas stabiliser son altitude en mode manuel. Vous assumerez l'entière responsabilité de l'utilisation de l'appareil suite à la modification de ces paramètres. DJI et ses sociétés affiliées ne pourront en aucun cas être tenus responsables pour tout dommage contractuel, délictuel (y compris les négligences) ou tout autre principe juridique ou d'équité.",
                nl: "U bent in de handmatige modus. Het luchtvaartuig kan de hoogte en houding niet stabiliseren in de handmatige modus. U bent zelf verantwoordelijk en aansprakelijk voor de werking van het luchtvaartuig na het wijzigen van deze instellingen. DJI en de daaraan gelieerde ondernemingen zijn niet aansprakelijk voor enige schade, hetzij op grond van contract, onrechtmatige handeling (inclusief nalatigheid) of eventuele andere wettelijke of billijke theorie.",
                pt: "Está a entrar no modo manual. A aeronave não consegue estabilizar a sua altitude e a atitude no modo manual. O utilizador é o único responsável pelo funcionamento da aeronave após a alteração destas definições. A DJI e suas filiais não serão responsáveis por quaisquer danos, quer estejam integrados em contratos, atos ilícitos (incluindo negligência) ou qualquer outra teoria legal ou equitativa.",
                ru: "Вы входите в ручной режим. В ручном режиме летательный аппарат не может стабилизировать свою высоту и пространственное положение. Вы несете полную ответственность за управление летательным аппаратом после изменения данных настроек. DJI и ее дочерние предприятия не несут ответственность за возможный ущерб как на основании договора, так и в результате нарушения правил эксплуатации (включая халатность) или применения иных теорий права или справедливости."
            },
            Limited500: {
                "zh-cn": "不能高于最高飞行高度",
                en: "Cannot higher than the Maximum Flight Altitude",
                jp: "設定されている高度以上は飛行できません",
                it: "Non superare l'altitudine di volo massima.",
                de: "Überschreitung der maximalen Flughöhe nicht möglich",
                es: "No puede sobrepasar la altitud de vuelo máxima",
                fr: "Impossible de dépasser l'altitude de vol maximale",
                nl: "Kan niet hoger zijn dan de maximale vlieghoogte",
                pt: "Não pode ser superior à altitude máxima de voo",
                ru: "Высота, превышающая максимальную высоту полета, недопустима"
            },
            ChooseStickMode: {
                "zh-cn": "通道查看",
                en: "Choose Stick Mode",
                jp: "スティックモードを選択します。",
                it: "Scegliere la modalità Stick",
                de: "Hebelmodus wählen",
                es: "Elija Modo de palanca",
                fr: "Sélectionner le mode du manche",
                nl: "Stickmodus kiezen",
                pt: "Selecionar modo de manche",
                ru: "Выберите Stick Mode (режим рычажков)"
            },
            StickMonitorJP: {
                "zh-cn": "日本手",
                en: "Mode 1",
                jp: "Mode 1",
                it: "Modalità 1",
                de: "Modus 1",
                es: "Modo 1",
                fr: "Mode 1",
                nl: "Modus 1",
                pt: "Modo 1",
                ru: "Режим 1"
            },
            StickMonitorCN: {
                "zh-cn": "中国手",
                en: "Mode 3",
                jp: "Mode 3",
                it: "Modalità 3",
                de: "Modus 3",
                es: "Modo 3",
                fr: "Mode 3",
                nl: "Modus 3",
                pt: "Modo 3",
                ru: "Режим 3"
            },
            StickMonitorRevJP: {
                "zh-cn": "反日本手",
                en: "Mode 4",
                jp: "Mode 4",
                it: "Modalità 4",
                de: "Modus 4",
                es: "Modo 4",
                fr: "Mode 4",
                nl: "Modus 4",
                pt: "Modo 4",
                ru: "Режим 4"
            },
            rawLevel1: {
                "zh-cn": "低电压报警",
                en: "Low Battery Warning",
                jp: "ローバッテリー警告",
                it: "Avvertimento di livello basso di carica della batteria",
                de: "Warnung! Akkuladezustand niedrig",
                es: "Advertencia de batería baja",
                fr: "Avertissement de batterie faible",
                nl: "Waarschuwing lage accucapaciteit",
                pt: "Aviso de bateria fraca",
                ru: "Сигнал низкого уровня заряда батареи"
            },
            rawLevel2: {
                "zh-cn": "严重低电压报警",
                en: "Critical Low Battery Warning",
                jp: "致命的なローバッテリー警告",
                it: "Avvertimento di Batteria quasi scarica",
                de: "Warnung! Akkuladezustand sehr niedrig",
                es: "Advertencia de batería baja crítica",
                fr: "Avertissement de niveau de batterie critique",
                nl: "Waarschuwing extreem lage accucapaciteit",
                pt: "Aviso de bateria extremamente baixa",
                ru: "Сигнал критически низкого уровня заряда батареи"
            },
            greenisminus: {
                "zh-cn": "绿色区域，请填写负数",
                en: "Negative value for coordinate that is on green axis.",
                jp: "緑の軸上にある座標の負の値",
                it: "Valore negativo per le coordinate sull'asse verde.",
                de: "Negativwert für Koordinate auf der grünen Achse.",
                es: "Valor negativo para la coordenada en el eje verde.",
                fr: "Valeur de coordonnée négative sur l'axe vert.",
                nl: "Negatieve waarde voor coördinaat op groene as.",
                pt: "Valor negativo para coordenada que se encontra no eixo verde.",
                ru: "Отрицательная величина для координаты, находящейся на зеленой оси."
            },
            redisplus: {
                "zh-cn": "红色区域，请填写正数",
                en: "Positive value for coordinate that is on red axis.",
                jp: "赤の軸上にある座標の正の値",
                it: "Valore positivo per le coordinate sull'asse rosso.",
                de: "Positivwert für Koordinate auf der roten Achse.",
                es: "Valor positivo para la coordenada en el eje rojo.",
                fr: "Valeur de coordonnée positive sur l'axe rouge.",
                nl: "Positieve waarde voor coördinaat op rode as.",
                pt: "Valor positivo para coordenada que se encontra no eixo vermelho.",
                ru: "Положительная величина для координаты, находящейся на красной оси."
            },
            directionErr: {
                "zh-cn": "方向异常",
                en: "Incorrect Direction",
                jp: "方向が正しくありません。",
                it: "Direzione non corretta",
                de: "Falsch Richtung",
                es: "Dirección incorrecta",
                fr: "Orientation incorrecte",
                nl: "Onjuiste richting",
                pt: "Direção incorreta",
                ru: "Неправильное направление"
            },
            maxdistance: {
                "zh-cn": "飞行距离",
                en: "Flight Distance",
                jp: "飛行距離",
                it: "Distanza di volo",
                de: "Flugstrecke",
                es: "Distancia de vuelo",
                fr: "Distance de vol",
                nl: "Vliegafstand",
                pt: "Distância de voo",
                ru: "Расстояние полета"
            },
            Level2short: {
                "zh-cn": "严重低电量报警",
                en: "Critical Low Battery Warning",
                jp: "致命的なバッテリー警告",
                it: "Avvertimento di Batteria quasi scarica",
                de: "Warnung! Akkuladezustand sehr niedrig",
                es: "Advertencia de batería baja crítica",
                fr: "Avertissement de niveau de batterie critique",
                nl: "Waarschuwing extreem lage accucapaciteit",
                pt: "Aviso de bateria extremamente baixa",
                ru: "Сигнал критически низкого уровня заряда батареи"
            },
            rawLevel2short: {
                "zh-cn": "严重低电压报警",
                en: "Critical Low Voltage Warning",
                jp: "致命的なバッテリー警告",
                it: "Avvertimento di Tensione bassa a livello critico",
                de: "Warnung! Spannung sehr niedrig",
                es: "Advertencia de tensión baja crítica",
                fr: "Avertissement : tension critique",
                nl: "Waarschuwing extreem laag voltage",
                pt: "Aviso de tensão extremamente baixa",
                ru: "Сигнал критически низкого напряжения"
            },
            recover: {
                "zh-cn": "恢复",
                en: "Restore"
            },
            nobackup: {
                "zh-cn": "暂无备份",
                en: "No Backup",
                jp: "バックアップなし",
                it: "Nessun backup",
                de: "Keine Sicherung",
                es: "No hay copia de seguridad",
                fr: "Aucune sauvegarde",
                nl: "Geen back-up",
                pt: "Sem cópia de segurança",
                ru: "Резервная копия отсутствует"
            },
            backupdate: {
                "zh-cn": "上次备份时间",
                en: "Last Backup",
                jp: "最後のバックアップ",
                it: "Ultimo backup",
                de: "Letzte Sicherung",
                es: "Última copia de seguridad",
                fr: "Dernière sauvegarde",
                nl: "Laatste back-up",
                pt: "Última cópia de segurança",
                ru: "Последнее резервирование"
            },
            failure: {
                "zh-cn": "失败",
                en: "Failed",
                jp: "失敗しました。",
                it: "Non riuscito",
                de: "Fehlgeschlagen",
                es: "Ha fallado",
                fr: "Echec",
                nl: "Mislukt",
                pt: "Falhou",
                ru: "Сбой"
            },
            lostconnect_desc_common: {
                "zh-cn": "连接断开，请检查设备与电脑主机的连接是否正常。",
                en: "Lost Connection. Ensure the flight controller is connected to your computer.",
                jp: "接続が切れています。フライトコントローラーがコンピューターに接続されていることを確認してください。",
                it: "Connessione interrotta Assicurarsi che il dispositivo di controllo del volo sia collegato al computer.",
                de: "Verbindung unterbrochen. Sicherstellen, dass die Flugsteuerung mit dem Computer verbunden ist.",
                es: "Conexión perdida. Compruebe que el controlador de vuelo está conectado a su ordenador.",
                fr: "Connexion interrompue. Assurez-vous que le contrôleur de vol est connecté à votre ordinateur.",
                nl: "Verbinding verbroken. Zorg ervoor dat de vluchtcontroller is aangesloten op uw computer.",
                pt: "Ligação perdida. Assegure-se de que o controlador de voo está ligado ao seu computador.",
                ru: "Потеряно соединение. Убедитесь в том, что пульт управления подключен к компьютеру."
            },
            lostconnect_desc_upgrade: {
                "zh-cn": "连接断开，设备升级步骤中正常重启过程，请耐心等待。若长时间（>5min）出现该提示，请检查设备与电脑主机的连接是否正常，并尝试插拔usb线，恢复连接。",
                en: "Please reconnect the usb cable if the Assistant cannot reach the drone for 5 minitutes after drone rebooting."
            },
            tipsbackup: {
                "zh-cn": "* 备份或恢复您的参数设置。备份与恢复需要在相同型号飞控之间进行，且须保证固件版本一致。",
                en: "* Backup or recover your configuration. This function requires identical flight controllers with same versions of firmwire."
            },
            browse: {
                "zh-cn": "浏览..",
                en: "Browse..",
                jp: "閲覧",
                it: "Scorrere..",
                de: "Durchsuchen...",
                es: "Examinar...",
                fr: "Parcourir...",
                nl: "Bladeren...",
                pt: "Navegar.",
                ru: "Поиск.."
            },
            excellent: {
                "zh-cn": "优",
                en: "Excellent",
                jp: "非常に良い",
                it: "Eccellente",
                de: "Sehr gut",
                es: "Excelente",
                fr: "Excellent",
                nl: "Uitstekend",
                pt: "Excelente",
                ru: "Отлично"
            },
            good: {
                "zh-cn": "良",
                en: "Good",
                jp: "良い",
                it: "Buono",
                de: "Gut",
                es: "Bien",
                fr: "Bon",
                nl: "Goed",
                pt: "Bom",
                ru: "Хорошо"
            },
            bad: {
                "zh-cn": "差",
                en: "Bad",
                jp: "悪い",
                it: "Scarso",
                de: "Schlecht",
                es: "Mal",
                fr: "Mauvais",
                nl: "Slecht",
                pt: "Mau",
                ru: "Плохо"
            },
            dlpath: {
                "zh-cn": "下载路径",
                en: "Download Path",
                jp: "ダウンロードパス",
                it: "Scaricare il percorso",
                de: "Download-Pfad",
                es: "Ruta de descarga",
                fr: "Chemin de téléchargement",
                nl: "Downloadpad",
                pt: "Caminho de transferência",
                ru: "Путь для загрузки"
            },
            Urgence: {
                "zh-cn": "应急",
                en: "Urgency",
                jp: "緊急",
                it: "Urgenza",
                de: "Dringlichkeit",
                es: "Urgencia",
                fr: "Urgence",
                nl: "Urgentie",
                pt: "Urgência",
                ru: "Срочность"
            },
            cameraerror: {
                "zh-cn": "飞行器连接不正常，请先重启飞行器，再连接调参",
                en: "Please reboot the aircraft."
            },
            p4RecommandVideo: {
                "zh-cn": "推荐观看教学视频",
                en: "Learn more from the video tutorials.",
                jp: "ビデオチュートリアルから詳細を学んでください。",
                it: "Per saperne di più guardare i video tutorial.",
                de: "Mehr in den Video-Tutorials erfahren.",
                es: "Obtenga más información en los videotutoriales.",
                fr: "Regardez les didacticiels vidéo pour en apprendre davantage.",
                nl: "Leer meer met behulp van de videotutorials.",
                pt: "Aprenda mais com os tutoriais de vídeo.",
                ru: "Для получения более подробной информации посмотрите учебные видеоролики."
            },
            CablibrationWindow: {
                "zh-cn": "校准窗口",
                en: "Calibration Window",
                jp: "キャリブレーションウィンドウ",
                it: "Finestra di calibrazione",
                de: "Kalibrierfenster",
                es: "Ventana de calibración",
                fr: "Fenêtre d'étalonnage",
                nl: "Kalibratievenster",
                pt: "Janela de calibragem",
                ru: "Окно калибровки"
            },
            SensorStatus: {
                "zh-cn": "传感器状态",
                en: "Sensor Status",
                jp: "センサーステータス",
                it: "Stato sensore",
                de: "Sensorstatus",
                es: "Estado de sensor",
                fr: "État du capteur",
                nl: "Sensorstatus",
                pt: "Estado do sensor",
                ru: "Состояние датчика"
            },
            FlightRecordlist: {
                "zh-cn": "飞行纪录列表",
                en: "Flight Record List",
                jp: "飛行記録リスト",
                it: "Elenco registrazioni di volo",
                de: "Flugschreiberliste",
                es: "Lista de registros de vuelo",
                fr: "Liste des enregistrements de vol",
                nl: "Lijst met vluchtopnamen",
                pt: "Lista de gravação de voos",
                ru: "Список полетных записей"
            },
            flightindex: {
                description: "?",
                "zh-cn": "飞行次数",
                en: "Flight Index",
                jp: "飛行インデックス",
                it: "Indice di volo",
                de: "Flugindex",
                es: "Índice de vuelos",
                fr: "Index de vol",
                nl: "Vluchtinhoud",
                pt: "Índice de voos",
                ru: "Указатель полетов"
            },
            flightdate: {
                "zh-cn": "时间",
                en: "Date",
                jp: "日付",
                it: "Data",
                de: "Datum",
                es: "Fecha",
                fr: "Date",
                nl: "Datum",
                pt: "Data",
                ru: "Дата"
            },
            downloaded: {
                "zh-cn": "下载完成",
                en: "Download Complete",
                jp: "ダウンロード完了",
                it: "Download completato",
                de: "Download abgeschlossen",
                es: "Descarga finalizada",
                fr: "Téléchargement terminé",
                nl: "Downloaden voltooid",
                pt: "Transferência concluída",
                ru: "Загрузка завершена"
            },
            downloadFailed: {
                "zh-cn": "下载/压缩失败",
                en: "Download/Compression Failed",
                jp: "ダウンロード／圧縮に失敗しました。",
                it: "Download/compressione non andata a buon fine",
                de: "Download/Kompression fehlgeschlagen",
                es: "Fallo de descarga/compresión",
                fr: "Échec du téléchargement/de la compression",
                nl: "Downloaden/comprimeren mislukt",
                pt: "A transferência/compressão falhou",
                ru: "Ошибка загрузки/сжатия"
            },
            openlocalfolder: {
                "zh-cn": "打开所在文件夹",
                en: "Open in the folder",
                jp: "ダウンロードホルダーを開きます。",
                it: "Apri la cartella",
                de: "Im Ordner öffnen",
                es: "Abrir en la carpeta",
                fr: "Ouvrir dans le dossier",
                nl: "Openen in de map",
                pt: "Abrir na pasta",
                ru: "Открыть в папке"
            },
            calculing: {
                "zh-cn": "标定计算中…",
                en: "Calculating...",
                jp: "キャリブレーションが進行中です・・・",
                it: "Calibrazione in corso...",
                de: "Kalibrierung läuft...",
                es: "Calibración en curso...",
                fr: "Étalonnage en cours...",
                nl: "Kalibratie wordt uitgevoerd...",
                pt: "Calibragem em curso...",
                ru: "Выполняется калибровка..."
            },
            calculingdesc: {
                description: "?",
                "zh-cn": "标定信息收集完毕，现在开始进行标定计算，请稍候。",
                en: "Calibration Information Collected. Calibrating...",
                jp: "キャリブレーションが進行中です。お待ちください。",
                it: "Calibrazione in corso, si prega di attendere.",
                de: "Kalibrierung läuft, bitte warten.",
                es: "Calibración en curso, espere...",
                fr: "Étalonnage en cours, patientez.",
                nl: "Kalibratie wordt uitgevoerd. Even geduld...",
                pt: "Calibragem em curso. Aguarde.",
                ru: "Выполняется калибровка, пожалуйста, подождите."
            },
            calculed: {
                "zh-cn": "标定成功！",
                en: "Calibration Complete",
                jp: "キャリブレーション完了！",
                it: "Calibrazione completata！",
                de: "Kalibrierung abgeschlossen!",
                es: "¡Calibración finalizada！",
                fr: "Étalonnage terminé ！",
                nl: "Kalibratie voltooid！",
                pt: "Calibragem concluída！",
                ru: "Калибровка завершена！"
            },
            calculedesc: {
                "zh-cn": "标定成功 请重启飞机!",
                en: "Calibration Success. Restart aircraft."
            },
            calculfailed: {
                "zh-cn": "标定失败！",
                en: "Calibration Failed",
                jp: "キャリブレーションに失敗しました！",
                it: "Calibrazione non riuscita！",
                de: "Kalibrierung fehlgeschlagen!",
                es: "¡La calibración ha fallado！",
                fr: "Échec de l'étalonnage ！",
                nl: "Kalibratie mislukt！",
                pt: "A calibragem falhou！",
                ru: "Калибровка не выполнена！"
            },
            calculfailedesc: {
                "zh-cn": "计算参数错误, 请重新标定, 如果依然失败, 请联系客服",
                en: "Calculation Error. Recalibrate now. Contact DJI Support if this persists",
                jp: "キャリブレーションに失敗しました！再度キャリブレーションを行ってください。解決できない場合は、DJI Supporにお問い合わせください。",
                it: "Calibrazione non riuscita！Ricalibrare. Contattare l'assistenza DJI se il problema si ripete.",
                de: "Kalibrierung fehlgeschlagen! Bitte neu kalibrieren. Bei wiederholtem Auftreten den DJI-Support kontaktieren.",
                es: "¡La calibración ha fallado！Repita la calibración. Contacte con DJI Support si se repite el fallo.",
                fr: "Échec de l'étalonnage ！Réessayez. Si le problème persiste, contactez le support DJI.",
                nl: "Kalibratie mislukt！Kalibreer opnieuw. Neem contact op met DJI Support als dit zich herhaalt.",
                pt: "A calibragem falhou！Volte a calibrar. Contacte a assistência da DJI se voltar a acontecer.",
                ru: "Калибровка не выполнена！Повторите калибровку. В случае повторения ошибки, обратитесь в службу поддержки DJI."
            },
            frontCameraCaliFinished: {
                "zh-cn": "前视摄像头标定完毕",
                en: "Forward Camera Calibration Complete",
                jp: "前部のカメラのキャリブレーションが完了しました。",
                it: "Calibrazione camere con visuale in avanti completata",
                de: "Kalibrierung der nach vorn gerichteten Kameras abgeschlossen",
                es: "Calibración de cámaras de visión frontal finalizada.",
                fr: "Étalonnage des caméras de vision avant terminé",
                nl: "Kalibratie van de naar voren gerichte camera's voltooid",
                pt: "Calibragem de câmaras de visão em frente concluída",
                ru: "Калибровка камер переднего обзора завершена."
            },
            beginDownCameraCali: {
                "zh-cn": "点击按钮开始下视摄像头标定，请按下图提示，飞行器底部面向屏幕。（电池仓朝右）",
                en: "Click to start Downward Vision camera calibration. Hold and point the bottom of the aircraft towards the screen.",
                jp: "クリックして下部のカメラのキャリブレーションを開始します。機体の下部を持って画面に向けます。",
                it: "Fare clic per avviare la calibrazione della camera con visuale verso il basso. Tenere e puntare la parte inferiore del velivolo verso lo schermo.",
                de: "Klicken, um Kalibrierung der nach unten gerichteten Kamera zu starten. Unterseite der Drohne auf den Bildschirm richten und halten.",
                es: "Haga clic para iniciar la calibración de la cámara de visión inferior. Sostenga la aeronave con la parte inferior hacia la pantalla.",
                fr: "Cliquez pour lancer l'étalonnage de la caméra de vision descendante. Tenez l'appareil en orientant sa partie inférieure vers l'écran.",
                nl: "Klik om te beginnen met de kalibratie van de naar beneden gerichte camera's. Houd de onderkant van het luchtvaartuig vast en op het scherm gericht.",
                pt: "Clique para iniciar calibragem de câmaras de visão para baixo. Mantenha premido e aponte a parte inferior da aeronave para o ecrã.",
                ru: "Нажмите, чтобы начать калибровку камеры, направленной вниз. Удерживайте и направляйте нижнюю часть летательного аппарата в сторону экрана."
            },
            beginDownCameraCaliBtn: {
                "zh-cn": "开始下视摄像头标定",
                en: "Start Downward Camera Calibration.",
                jp: "下部のカメラのキャリブレーションを開始します。",
                it: "Avvio calibrazione camere con visuale verso il basso.",
                de: "Kalibrierung der nach unten gerichteten Kamera starten.",
                es: "Iniciar la calibración de las cámaras de visión inferior.",
                fr: "Lancez l'étalonnage des caméras de vision descendante.",
                nl: "Start de kalibratie van de naar beneden gerichte camera’s.",
                pt: "Iniciar a calibragem de câmaras de visão para baixo.",
                ru: "Начать калибровку камер, направленных вниз."
            },
            downwardCameraCaliFinished: {
                "zh-cn": "下视摄像头标定完毕",
                en: "Downward Camera Calibration Complete",
                jp: "下方ビジョンカメラのキャリブレーションが完了しました。"
            },
            beginBehindCameraCali: {
                "zh-cn": "点击按钮开始后视摄像头标定，请按下图提示，飞行器底部面向屏幕。（电池仓朝右）",
                en: "点击按钮开始后视摄像头标定，请按下图提示，飞行器底部面向屏幕。（电池仓朝右）"
            },
            beginBehindCameraCaliBtn: {
                "zh-cn": "开始后视摄像头标定",
                en: "开始后视摄像头标定"
            },
            revisioncali: {
                "zh-cn": "重新标定",
                en: "Recalibrate",
                jp: "再度キャリブレーション中です。",
                it: "Ricalibrare",
                de: "Neu kalibrieren",
                es: "Repetir calibración",
                fr: "Recalibrer",
                nl: "Opnieuw kalibreren",
                pt: "Recalibrar",
                ru: "Выполните калибровку повторно"
            },
            chooseInputPlaceholder: {
                "zh-cn": "若没有合适的选项，请自行输入。",
                en: "Enter the screen size if no option is available.",
                jp: "オプションがない場合、画面サイズを入力します。",
                it: "Inserire la dimensione dello schermo se non sono disponibili opzioni.",
                de: "Bildschirmgröße eingeben, wenn keine Option verfügbar ist.",
                es: "Introduzca el tamaño de la pantalla si no hay opción disponible.",
                fr: "Saisissez le format d'écran si aucune option n'est disponible.",
                nl: "Voer het schermformaat in als er geen optie beschikbaar is.",
                pt: "Introduzir o tamanho do ecrã se não houver nenhuma opção disponível.",
                ru: "Если опции отсутствуют, введите размер экрана."
            },
            p4alert: {
                "zh-cn": "提示",
                en: "Note",
                jp: "ヒント",
                it: "Suggerimenti",
                de: "Tipps",
                es: "Consejos",
                fr: "Conseils",
                nl: "Tips",
                pt: "Sugestões",
                ru: "Советы"
            },
            p4caliConfirmExit: {
                "zh-cn": "是否停止标定，退出全屏模式？",
                en: "Stop calibration and exit full screen mode?",
                jp: "全画面モードとキャリブレーションをを終了しますか？",
                it: "Interrompere la calibrazione e uscire dalla modalità Schermo intero?",
                de: "Kalibrierung anhalten und Vollbildmodus verlassen?",
                es: "¿Detener calibración y salir del modo de pantalla completa?",
                fr: "Arrêter l'étalonnage et quitter le mode plein écran ?",
                nl: "Stoppen met kalibreren en beeldvullende modus verlaten?",
                pt: "Parar calibragem e sair do modo de ecrã total?",
                ru: "Остановить калибровку и выйти из режима полного экрана?"
            },
            p4caliConfirmExitBtn: {
                "zh-cn": "退出全屏模式",
                en: "Exit full screen mode",
                jp: "全画面モードを終了します。",
                it: "Esci dalla modalità Schermo intero",
                de: "Vollbildmodus verlassen",
                es: "Salir del modo de pantalla completa",
                fr: "Quitter le mode plein écran",
                nl: "Beeldvullende modus verlaten",
                pt: "Sair do modo de ecrã total",
                ru: "Выйти из режима полного экрана"
            },
            error: {
                "zh-cn": "错误",
                en: "Error",
                jp: "エラー",
                it: "Errore",
                de: "Fehler",
                es: "Error",
                fr: "Erreur",
                nl: "Fout",
                pt: "Erro",
                ru: "Ошибка"
            },
            RightCamera: {
                "zh-cn": "右",
                en: "Right",
                jp: "右",
                it: "Destra",
                de: "Rechts",
                es: "Derecha",
                fr: "Droite",
                nl: "Rechts",
                pt: "Direita",
                ru: "Вправо"
            },
            LeftCamera: {
                "zh-cn": "左",
                en: "Left",
                jp: "左",
                it: "Sinistra",
                de: "Links",
                es: "Izquierda",
                fr: "Gauche",
                nl: "Links",
                pt: "Esquerda",
                ru: "Влево"
            },
            UpCamera: {
                "zh-cn": "上",
                en: "Upper",
                jp: "上",
                it: "In alto",
                de: "Hoch",
                es: "Arriba",
                fr: "Haut",
                nl: "Omhoog",
                pt: "Para cima",
                ru: "Вверх"
            },
            DownCamera: {
                "zh-cn": "下",
                en: "Down",
                jp: "下",
                it: "In basso",
                de: "Herunter",
                es: "Abajo",
                fr: "Bas",
                nl: "Omlaag",
                pt: "Para baixo",
                ru: "Вниз"
            },
            pleasereadmanual: {
                "zh-cn": "开始标定前请仔细阅读如下步骤",
                en: "Read the following steps before calibration",
                jp: "カメラのキャリブレーションを開始する前に以下の指示を参照してください。",
                it: "Fare riferimento alle seguenti istruzioni prima di iniziare la calibrazione",
                de: "Vor Beginn der Kalibrierung die folgenden Anweisungen beachten.",
                es: "Consulte las instrucciones siguientes antes de iniciar la calibración",
                fr: "Lisez les instructions suivantes avant de lancer l'étalonnage.",
                nl: "Raadpleeg de instructies hieronder voor het starten van de kalibratie",
                pt: "Consulte as instruções abaixo antes de iniciar a calibragem",
                ru: "Перед тем как начать калибровку, ознакомьтесь с инструкциями ниже"
            },
            updowntips: {
                "zh-cn": "请上下旋转飞行器",
                en: "Rotate the aircraft vertically",
                jp: "機体を垂直に回転させてください。",
                it: "Ruotare il velivolo in senso verticale",
                de: "Drohne vertikal drehen",
                es: "Gire la aeronave en vertical",
                fr: "Faites pivoter l'appareil verticalement",
                nl: "Draai het toestel verticaal",
                pt: "Rode a aeronave na vertical",
                ru: "Поверните летательный аппарат по вертикальной оси"
            },
            leftrighttips: {
                "zh-cn": "请左右旋转飞行器",
                en: "Rotate the aircraft horizontally",
                jp: "機体を水平に回転させてください。",
                it: "Ruotare il velivolo in senso orizzontale",
                de: "Drohne horizontal drehen",
                es: "Gire la aeronave en horizontal",
                fr: "Faites pivoter l'appareil horizontalement",
                nl: "Draai het toestel horizontaal",
                pt: "Rode a aeronave na horizontal",
                ru: "Поверните летательный аппарат по горизонтальной оси"
            },
            MatchRectSuccess: {
                "zh-cn": "请保持当前动作，等待下一步操作指引",
                en: "Maintain the current position and wait for the next instruction",
                jp: "現在の位置を保持し次の指示を待ちます。",
                it: "Mantenere la posizione corrente e attendere la prossima istruzione",
                de: "Aktuelle Position halten und auf nächste Anweisung warten",
                es: "Mantenga la posición actual y espere a la instrucción siguiente",
                fr: "Maintenez l'appareil en position et attendez les instructions",
                nl: "Houd de huidige positie vast en wacht op de volgende instructie",
                pt: "Manter a posição atual e aguardar a instrução seguinte",
                ru: "Сохраняйте текущее положение и дождитесь следующего указания,"
            },
            goingtoTrack: {
                "zh-cn": "秒后进入垂直校准。",
                en: "s later to enter vertical calibration",
                jp: "～秒後に垂直キャリブレーションに入ります。",
                it: "s da adesso per accedere alla calibrazione verticale",
                de: "s später muss der vertikale Kalibrierwert eingegeben werden",
                es: "s luego para entrar en calibración vertical",
                fr: "suivantes pour effectuer l'étalonnage vertical",
                nl: "voor de verticale kalibratie",
                pt: "s mais tarde para entrar na calibragem vertical",
                ru: "чтобы войти в режим вертикальной калибровки"
            },
            pleasekeepredcenter: {
                "zh-cn": "偏移过多，请仅仅旋转飞机",
                en: "Offset too large. Only rotate the aircraft.",
                jp: "赤のバーが常に中央にあることを確認してください。",
                it: "Offset eccessivo. Ruotare esclusivamente il velivolo.",
                de: "Versatz zu groß. Drohne nur drehen.",
                es: "Desviación excesiva. Gire solamente la aeronave.",
                fr: "Décalage trop élevé. Faites uniquement pivoter l'appareil.",
                nl: "Offset te groot. Draai alleen het luchtvaartuig.",
                pt: "Desvio demasiado grande. Apenas rodar a aeronave.",
                ru: "Слишком большое смещение. Поворачивайте только летательный аппарат."
            },
            rotate90ltr: {
                "zh-cn": "姿态错误，请将飞行器向右旋转90度",
                en: "Attitude Error. Rotate the aircraft to the right by 90 degrees",
                jp: "機体姿勢エラー。機体を右に９０度回転させてください。",
                it: "Errore di orientamento del velivolo. Ruotare il velivolo di 90 gradi verso destra.",
                de: "Fehler bei der Ausrichtung der Drohne. Drohne um 90 Grad nach rechts drehen.",
                es: "Error de orientación de la aeronave. Gire la aeronave 90 grados a la derecha.",
                fr: "Erreur d'orientation de l'appareil. Faites pivoter l'appareil de 90 degrés vers la droite.",
                nl: "Oriëntatiefout luchtvaartuig. Draai het luchtvaartuig 90 graden naar rechts.",
                pt: "Erro de orientação da aeronave. Rodar a aeronave 90 graus para a direita.",
                ru: "Ошибка ориентации летательного аппарата. Поверните летательный аппарат на 90 градусов вправо."
            },
            rotate90rtl: {
                "zh-cn": "姿态错误，请将飞行器向左旋转90度",
                en: "Attitude Error. Rotate the aircraft to the left by 90 degrees",
                jp: "機体姿勢エラー。機体を左に９０度回転させてください。",
                it: "Errore di orientamento del velivolo. Ruotare il velivolo di 90 gradi verso sinistra.",
                de: "Fehler bei der Ausrichtung der Drohne. Drohne um 90 Grad nach links drehen.",
                es: "Error de orientación de la aeronave. Gire la aeronave 90 grados a la izquierda.",
                fr: "Erreur d'orientation de l'appareil. Faites pivoter l'appareil de 90 degrés vers la gauche.",
                nl: "Oriëntatiefout luchtvaartuig. Draai het luchtvaartuig 90 graden naar links.",
                pt: "Erro de orientação da aeronave. Rodar a aeronave 90 graus para a esquerda.",
                ru: "Ошибка ориентации летательного аппарата. Поверните летательный аппарат на 90 градусов влево."
            },
            rotate180: {
                "zh-cn": "姿态错误，请将飞行器旋转180度",
                en: "Attitude Error. Rotate the aircraft by 180 degrees",
                jp: "機体姿勢エラー。機体を１８０度回転させてください。",
                it: "Errore di orientamento del velivolo. Ruotare il velivolo di 180 gradi.",
                de: "Fehler bei der Ausrichtung der Drohne. Drohne um 180 Grad drehen.",
                es: "Error de orientación de la aeronave. Gire la aeronave 180 grados.",
                fr: "Erreur d'orientation de l'appareil. Faites pivoter l'appareil de 180 degrés.",
                nl: "Oriëntatiefout luchtvaartuig. Draai het luchtvaartuig 180 graden.",
                pt: "Erro de orientação da aeronave. Rodar a aeronave em 180 graus.",
                ru: "Ошибка ориентации летательного аппарата. Поверните летательный аппарат на 180 градусов."
            },
            NoGraphicTips: {
                "zh-cn": "无法检测到图像，请按左上角图示将摄像头对准屏幕。",
                en: "Unable to detect images. Ensure the cameras are faced to the screen as shown by the top left chart.",
                jp: "画像を検出できません。カメラが画面に向いていることを確認してください。",
                it: "Impossibile rilevare immagini. Assicurarsi che le telecamere siano rivolte verso lo schermo come illustrato dal grafico in alto a sinistra.",
                de: "Bilder wurden nicht erkannt. Sicherstellen, dass die Kameras auf den Bildschirm gerichtet sind (siehe oben links).",
                es: "No se han detectado imágenes. Asegúrese de que las cámaras están orientadas hacia la pantalla según se indica en el gráfico superior izquierdo.",
                fr: "Impossible de détecter les images. Assurez-vous que les caméras sont orientées vers l'écran, comme illustré sur le graphique supérieur gauche.",
                nl: "Beelden detecteren niet mogelijk. Zorg ervoor dat de camera's naar het scherm zijn gericht zoals weergegeven in de grafiek links bovenin.",
                pt: "Não foi possível detetar imagens. Assegurar que as câmaras estão viradas para o ecrã como ilustrado no gráfico superior esquerdo.",
                ru: "Невозможно обнаружить изображения. Убедитесь, что камеры направлены на экран, как показано на схеме в верхнем левом углу."
            },
            matchRectStepSuccess1: {
                "zh-cn": "第一次对屏成功",
                en: "Step 1 Complete",
                jp: "手順１完了",
                it: "Fase 1 completata",
                de: "Schritt 1 abgeschlossen",
                es: "Paso 1 Completado",
                fr: "Étape 1 terminée",
                nl: "Stap 1 voltooid",
                pt: "Passo 1 concluído",
                ru: "Шаг 1 завершен"
            },
            matchRectStepSuccess2: {
                "zh-cn": "第二次对屏成功",
                en: "Step 2 Complete",
                jp: "手順２完了",
                it: "Fase 2 completata",
                de: "Schritt 2 abgeschlossen",
                es: "Paso 2 Completado",
                fr: "Étape 2 terminée",
                nl: "Stap 2 voltooid",
                pt: "Passo 2 concluído",
                ru: "Шаг 2 завершен"
            },
            matchRectStepSuccess3: {
                "zh-cn": "第三次对屏成功",
                en: "Step 3 Complete",
                jp: "手順３完了",
                it: "Fase 3 completata",
                de: "Schritt 3 abgeschlossen",
                es: "Paso 3 Completado",
                fr: "Étape 3 terminée",
                nl: "Stap 3 voltooid",
                pt: "Passo 3 concluído",
                ru: "Шаг 3 завершен"
            },
            trackXSuccess: {
                "zh-cn": "x方向，追线成功",
                en: "x方向，追线成功"
            },
            trackYSuccess: {
                "zh-cn": "x方向，追线成功",
                en: "x方向，追线成功"
            },
            p4_up_ftp_error: {
                "zh-cn": "设备通信错误，升级失败。",
                en: "Device Communication Error. Update Failed.",
                jp: "機器の通信エラー。アップデートに失敗しました。",
                it: "Errore di comunicazione del dispositivo. L'aggiornamento non è riuscito.",
                de: "Gerätekommunikationsfehler. Update fehlgeschlagen.",
                es: "Error de comunicación de dispositivo. La actualización ha fallado.",
                fr: "Erreur de communication avec l'appareil. Échec de la mise à jour.",
                nl: "Apparaatcommunicatiefout. Updaten mislukt.",
                pt: "Erro de comunicação do dispositivo. A atualização falhou.",
                ru: "Ошибка связи с устройством. Не удалось выполнить обновление."
            },
            enterFlightLogConfirm: {
                "zh-cn": "进入飞行数据页面将会切换设备状态，可能导致部分功能暂时失效，重启设备可恢复。",
                en: "Entering Flight Data section may change the Device Status. Some features may be disabled temperarily. Restarting the device can restore the features.",
                jp: "フライトデータセクションに入ると、機器のシステムステータスが変わります。システム機能の中には無効になるものもあります。",
                it: "Entrare nella sezione Flight Data (Dati di volo) potrebbe modificare lo stato del dispositivo. Alcune funzioni possono essere state temporaneamente disabilitate. Riavviare il dispositivo potrebbe ripristinare tali funzioni.",
                de: "Durch die Eingabe der Flugdaten kann der Gerätestatus verändert werden. Einige Funktionen können vorübergehend deaktiviert werden. Beim Neustart des Geräts können die Funktionen wiederhergestellt werden.",
                es: "La introducción de la sección de datos de vuelo puede modificar el estado del dispositivo. Algunas funciones pueden desactivarse temporalmente. Las funciones podrían restablecerse reiniciando el dispositivo.",
                fr: "L'accès à la section des données de vol peut modifier l'état de l'appareil. Il se peut que certaines fonctions soient temporairement désactivées. Essayez de redémarrer l'appareil pour rétablir les fonctions.",
                nl: "De status van het apparaat kan veranderen als u naar het vluchtgegevensgedeelte gaat. Sommige functies kunnen tijdelijk worden uitgeschakeld. Start het toestel opnieuw om de functies te herstellen.",
                pt: "A entrada na secção de dados de voo pode alterar o estado do dispositivo. Algumas funcionalidades podem ser desativadas temporariamente. Reiniciar o dispositivo poderá restaurar as funcionalidades.",
                ru: 'Вход в раздел "Полетные данные" может изменить состояние устройства. Некоторые функции могут быть временно отключены. Функции могут быть восстановлены путем повторного запуска устройства.'
            },
            NEED_UPGRADE: {
                "zh-cn": "您的固件版本不支持本版调参，请升级固件后重试。",
                en: "Your firmware is not supported in this DJI Assistant version. Update your firmware and try again."
            },
            imucaliconfirm: {
                "zh-cn": "校准期间请保持IMU正面朝上且飞行器处于静止状态。",
                en: "Ensure IMU is faced up and the aircraft remains still during calibration.",
                jp: "キャリブレーション中 IMUは上向きで、機体は静止したままであることを確認してください。",
                it: "Assicurarsi che la IMU sia rivolta verso l'alto e il velivolo rimanga fermo durante la calibrazione.",
                de: "Sicherstellen, dass die IMU nach oben weist und die Drohne bei der Kalibrierung nicht bewegt wird.",
                es: "Asegúrese de que la IMU está orientada hacia arriba y la aeronave se mantiene inmóvil durante la calibración.",
                fr: "Assurez-vous que l'IMU est orientée vers le haut et que l'appareil reste en position pendant l'étalonnage.",
                nl: "Zorg dat IMU naar boven is gericht en dat het luchtvaartuig stilstaat tijdens de kalibratie.",
                pt: "Certifique-se de que a IMU está voltada para cima e que a aeronave permanece imóvel durante a calibragem.",
                ru: "Убедитесь, что во время калибровки IMU направлен вверх, а летательный аппарат остается неподвижен."
            },
            alertips: {
                "zh-cn": "提示",
                en: "Tips",
                jp: "ヒント",
                it: "Suggerimenti",
                de: "Tipps",
                es: "Consejos",
                fr: "Conseils",
                nl: "Tips",
                pt: "Sugestões",
                ru: "Советы"
            },
            Learnmore: {
                "zh-cn": "详细信息",
                en: "Learn more",
                jp: "詳細を確認します。",
                it: "Per saperne di più",
                de: "Weitere Informationen",
                es: "Más información",
                fr: "En savoir plus",
                nl: "Meer info",
                pt: "Saber mais",
                ru: "Подробнее ..."
            },
            All: {
                "zh-cn": "所有",
                en: "All",
                jp: "すべて",
                it: "Tutti",
                de: "Alle",
                es: "Todo",
                fr: "Tous",
                nl: "Alles",
                pt: "Todos",
                ru: "Все"
            },
            lastestver: {
                "zh-cn": "最新版本",
                en: "Latest version",
                jp: "最新版",
                it: "Nuovo",
                de: "Neu",
                es: "Nuevo",
                fr: "Nouveautés",
                nl: "Nieuw",
                pt: "Novo",
                ru: "Новые"
            },
            refresh: {
                "zh-cn": "刷新",
                en: "Refresh",
                jp: "更新します。",
                it: "Ricaricare",
                de: "Aktualisieren",
                es: "Actualizar",
                fr: "Actualiser",
                nl: "Vernieuwen",
                pt: "Atualizar",
                ru: "Обновить"
            },
            File: {
                "zh-cn": "文件",
                en: "File",
                jp: "ファイル",
                it: "File",
                de: "Datei",
                es: "Archivo",
                fr: "Fichier",
                nl: "Bestand",
                pt: "Ficheiro",
                ru: "Файл"
            },
            Loading: {
                "zh-cn": "正在加载",
                en: "Loading",
                jp: "読込み中です。",
                it: "Caricamento in corso",
                de: "Wird geladen",
                es: "Cargando...",
                fr: "Chargement",
                nl: "Laden",
                pt: "A carregar",
                ru: "Загрузка"
            },
            loaded: {
                "zh-cn": "加载完成",
                en: "Loaded",
                jp: "読み込まれました。",
                it: "Caricato",
                de: "Geladen",
                es: "Cargado",
                fr: "Chargé",
                nl: "Geladen",
                pt: "Carregado",
                ru: "Загружен"
            },
            LoadFailed: {
                "zh-cn": "加载失败",
                en: "Load Failed",
                jp: "読込みに失敗しました。",
                it: "Caricamento non riuscito",
                de: "Ladevorgang fehlgeschlagen",
                es: "La carga ha fallado",
                fr: "Échec du chargement",
                nl: "Laden mislukt",
                pt: "O carregamento falhou",
                ru: "Сбой загрузки"
            },
            batterymanager: {
                "zh-cn": "电池管理",
                en: "Battery Manager",
                jp: "バッテリーマネージャー",
                it: "Gestione batteria",
                de: "Akku-Manager",
                es: "Administrador de batería",
                fr: "Gestionnaire de batterie",
                nl: "Accumanager",
                pt: "Gestão da bateria",
                ru: "Система управления аккумуляторной батареей"
            },
            batterylow: {
                "zh-cn": "电量不足",
                en: "Battery Low",
                jp: "バッテリー残量が少ない。",
                it: "Batteria quasi scarica",
                de: "Akku-Stand niedrig",
                es: "Batería baja",
                fr: "Batterie faible",
                nl: "Accu bijna leeg",
                pt: "Bateria fraca",
                ru: "Низкий заряд аккумуляторной батареи"
            },
            batterymanagerpanel: {
                "zh-cn": "电池管理板",
                en: "Battery Manager Panel",
                jp: "バッテリーマネージャーパネル",
                it: "Pannello di gestione batteria",
                de: "Akku-Manager-Tafel",
                es: "Panel del administrador de batería",
                fr: "Volet du gestionnaire de batterie",
                nl: "Accubeheervenster",
                pt: "Painel de gestão da bateria",
                ru: "Панель системы управления аккумуляторной батареей"
            },
            BatteryCurrent: {
                "zh-cn": "电流",
                en: "Battery Current",
                jp: "バッテリー電流",
                it: "Corrente batteria",
                de: "Akku-Stromstärke",
                es: "Corriente de la batería",
                fr: "Courant de la batterie",
                nl: "Accustroom",
                pt: "Corrente da bateria",
                ru: "Ток аккумуляторной батареи"
            },
            BatteryVoltage: {
                "zh-cn": "电压",
                en: "Battery Voltage",
                jp: "バッテリー電圧",
                it: "Tensione batteria",
                de: "Akku-Spannung",
                es: "Tensión de la batería",
                fr: "Tension de la batterie",
                nl: "Accuvoltage",
                pt: "Tensão da bateria",
                ru: "Напряжение аккумуляторной батареи"
            },
            BatteryTemperature: {
                "zh-cn": "电池温度",
                en: "Battery Temperature",
                jp: "バッテリー温度",
                it: "Temperatura batteria",
                de: "Akku-Temperatur",
                es: "Temperatura de la batería",
                fr: "Température de la batterie",
                nl: "Accutemperatuur",
                pt: "Temperatura da bateria",
                ru: "Температура аккумуляторной батареи"
            },
            eCurrent: {
                "zh-cn": "电流",
                en: "Current",
                jp: "電流",
                it: "Attuale",
                de: "Strom",
                es: "Corriente",
                fr: "Courant",
                nl: "Huidige",
                pt: "Atual",
                ru: "Текущий"
            },
            eTemp: {
                "zh-cn": "温度",
                en: "Temp",
                jp: "温度",
                it: "Temp",
                de: "Temp.",
                es: "Temperatura",
                fr: "Température",
                nl: "Temp",
                pt: "Temp",
                ru: "Врем."
            },
            upfailandretry: {
                "zh-cn": "升级失败，请重新升级。",
                en: "Update Failed. Please retry.",
                jp: "アップデートに失敗しました。やり直します。",
                it: "L'aggiornamento non è riuscito. Riprovare.",
                de: "Update fehlgeschlagen. Bitte erneut versuchen.",
                es: "La actualización ha fallado. Inténtelo de nuevo.",
                fr: "Échec de la mise à jour. Réessayez.",
                nl: "Updaten mislukt. Probeer het opnieuw.",
                pt: "A atualização falhou. Tente novamente.",
                ru: "Не удалось выполнить обновление. Повторите попытку."
            },
            movetoomuch: {
                "zh-cn": "填充进度条失败。请原地旋转飞行器，不要平移。",
                en: "Cannot fill the progress bar. Pan or tilt the aircraft without moving its position.",
                jp: "カメラの動きが大きすぎます。再度キャリブレーションしてください。",
                it: "Impossibile completare la barra di avanzamento. Ruotare il velivolo in orizzontale o in verticale senza muoverlo dala sua posizione.",
                de: "Fortschrittsbalken kann nicht gefüllt werden. Drohne ohne Veränderung der Position schwenken oder neigen.",
                es: "Imposible llenar la barra de progreso. Gire o incline la aeronave sin desplazarla.",
                fr: "Impossible de remplir la barre de progression. Faites pivoter l'axe panoramique ou inclinez l'appareil en maintenant sa position.",
                nl: "Vullen van voortgangsbalk niet mogelijk. Pan of kantel het luchtvaartuig zonder het te verplaatsen.",
                pt: "Não é possível encher a barra de progresso. Oscilar ou inclinar a aeronave sem deslocar a sua posição.",
                ru: "Невозможно заполнить индикатор хода выполнения. Перед изменением положения летательного аппарата поверните или наклоните его."
            },
            movetoomuch2: {
                "zh-cn": "填充过程移动过多",
                en: "填充过程移动过多",
                jp: "填充过程移动过多",
                it: "填充过程移动过多",
                de: "填充过程移动过多",
                es: "填充过程移动过多",
                fr: "填充过程移动过多",
                nl: "填充过程移动过多",
                pt: "填充过程移动过多",
                ru: "填充过程移动过多"
            },
            goingtoMatchRect: {
                "zh-cn": "秒后进入对屏标定。",
                en: "seconds to proceed to calibration",
                jp: "数秒後続けてキャリブレーションを行います。",
                it: "secondi per procedere alla calibrazione",
                de: "Sekunden bis zum Beginn der Kalibrierung",
                es: "segundos para iniciar la calibración",
                fr: "secondes pour effectuer l'étalonnage",
                nl: "seconden om verder te gaan naar de kalibratie",
                pt: "segundos para proceder à calibragem",
                ru: "секунд, чтобы начать процесс калибровки"
            },
            Parameters: {
                "zh-cn": "参数表",
                en: "Parameters",
                jp: "パラメーター",
                it: "Parametri",
                de: "Parameter",
                es: "Parámetros",
                fr: "Paramètres",
                nl: "Parameters",
                pt: "Parâmetros",
                ru: "Параметры"
            },
            SendnAccept: {
                "zh-cn": "收发测试",
                en: "Send & Accept",
                jp: "送信して同意",
                it: "Invia e accetta",
                de: "Senden und zustimmen",
                es: "Enviar y aceptar",
                fr: "Envoyer et accepter",
                nl: "Verzenden en accepteren",
                pt: "Enviar e receber",
                ru: "Отправить и принять"
            },
            Factory: {
                "zh-cn": "工厂测试",
                en: "Factory Test",
                jp: "工場試験",
                it: "Test di fabbrica",
                de: "Werktest",
                es: "Prueba de fábrica",
                fr: "Test d'usine",
                nl: "Fabriekstest",
                pt: "Teste de fábrica",
                ru: "Заводское испытание"
            },
            LiveVideo: {
                "zh-cn": "即时视频",
                en: "Live Video",
                jp: "ライブビデオ",
                it: "Video dal vivo",
                de: "Live-Video",
                es: "Vídeo en directo",
                fr: "Vidéo en direct",
                nl: "Live video",
                pt: "Vídeo em direto",
                ru: "Видео в режиме реального времени"
            },
            tipsmounting_mseries: {
                "zh-cn": "* 请填写GPS模块的安装位置（相对于机架重心的偏移数值）",
                en: "* Fill in the GPS module installation position (the offset values to the center of gravity of the aircraft.)",
                jp: "*機体の質量の中心に対する補正値(GPSモデュ―ル)を入力してください。",
                it: "* Inserire la posizione di installazione del modulo GPS (i valori di offset rispetto al centro di gravità del velivolo.)",
                de: "* Einbaulage des GPS-Moduls eintragen (Versatz bis zum Schwerpunkt der Drohne)",
                es: "* Introduzca la posición de instalación del módulo de GPS (los valores de desplazamiento respecto del centro de gravedad de la aeronave).",
                fr: "* Indiquez la position d'installation du module GPS (valeurs de décalage par rapport au centre de gravité de l'appareil.)",
                nl: "* Vul de installatiepositie van de GPS-module in (de offset-waarden bij het zwaartepunt van het luchtvaartuig).",
                pt: "* Introduzir a posição de instalação do módulo GPS (os valores de desvio em relação ao centro de gravidade da aeronave.)",
                ru: "* Укажите место установки модуля GPS (значения смещения к центру тяжести летательного аппарата.)"
            },
            noticeUpgradeConfirm: {
                "zh-cn": "有部分模块的固件版本与当前设备的固件版本不一致，可能会产生兼容性问题，请确认是否刷新固件？",
                en: "Firmware incompatibility detected between some modules and current device. Update your firmware?"
            },
            upnotice1rc: {
                "zh-cn": "注意：请重启遥控器后再尝试升级固件。",
                en: "Note: Restart the Remote Controller before updating the firmware.",
                jp: "注記：再度ファームウェアをアップデートする前に、送信機の電源を切ってから入れ直してください。",
                it: "Nota: Riavviare il radiocomando prima di aggiornare il firmware.",
                de: "Hinweis: Vor dem Update der Firmware die Fernbedienung neu starten.",
                es: "Nota: Reinicie el control remoto antes de actualizar el firmware.",
                fr: "Remarque : Redémarrez la radiocommande avant de mettre à jour le micrologiciel.",
                nl: "Opmerking: Start de externe controller opnieuw om de firmware te updaten.",
                pt: "Nota: reiniciar o telecomando antes de atualizar o firmware.",
                ru: "Примечание: Перед началом обновления микропрограммного обеспечения перезапустите пульт дистанционного управления."
            },
            upnotice1common: {
                "zh-cn": "注意：请重启设备后再尝试升级固件。",
                en: "Note: Restart the device before updating the firmware.",
                jp: "注記：「やり直し」をクリックする前に、機器の電源を切ってから入れ直してください。",
                it: "Nota: Riavviare il dispositivo prima di aggiornare il firmware.",
                de: "Hinweis: Vor dem Update der Firmware das Gerät neu starten.",
                es: "Nota: Reinicie el dispositivo antes de actualizar el firmware.",
                fr: "Remarque : Redémarrez l'appareil avant de mettre à jour le micrologiciel.",
                nl: "Opmerking: Start het apparaat opnieuw voor het updaten van de firmware.",
                pt: "Nota: reiniciar o dispositivo antes de atualizar o firmware.",
                ru: "Примечание: Перед началом обновления микропрограммного обеспечения перезапустите устройство."
            },
            upnotice3rc: {
                "zh-cn": "请确保遥控器已供电且电脑已连接至网络。",
                en: "Ensure the Remote Controller is turned on and the computer is connected to the Internet.",
                jp: "送信機の電源が入っていて、コンピューターがインターネットに接続されていることを確認してください。",
                it: "Assicurarsi che il Radiocomando sia acceso e il computer sia collegato a internet.",
                de: "Sicherstellen, dass die Fernbedienung eingeschaltet und der Computer mit dem Internet verbunden ist.",
                es: "Compruebe que el control remoto esté encendido y el ordenador conectado a Internet.",
                fr: "Assurez-vous que la radiocommande est sous tension et que l'ordinateur est connecté à Internet.",
                nl: "Controleer of de afstandsbediening is ingeschakeld en de computer is verbonden met internet.",
                pt: "Certifique-se de que o telecomando está ligado e que o computador está ligado à Internet.",
                ru: "Убедитесь, что питание пульта дистанционного управления включено и компьютер подключен к Интернету."
            },
            upnotice3common: {
                "zh-cn": "请确保设备已供电且电脑已连接至网络。",
                en: "Ensure the device is turned on and the computer is connected to the Internet.",
                jp: "機器の電源が入っていて、コンピューターがインターネットに接続されていることを確認してください。",
                it: "Assicurarsi che il dispositivo sia acceso e il computer sia collegato a internet.",
                de: "Sicherstellen, dass das Gerät eingeschaltet und der Computer mit dem Internet verbunden ist.",
                es: "Compruebe que el dispositivo esté encendido y el ordenador conectado a Internet.",
                fr: "Assurez-vous que l'appareil est sous tension et que l'ordinateur est connecté à Internet.",
                nl: "Controleer of het apparaat is ingeschakeld en de computer is verbonden met internet.",
                pt: "Certifique-se de que o dispositivo está ligado e que o computador está ligado à Internet.",
                ru: "Убедитесь в том, что устройство включено и компьютер подключен к Интернету."
            },
            upnotice4rc: {
                "zh-cn": "遥控器已成功升级至",
                en: "The Remote Controller has been updated to:",
                jp: "送信機は次のバージョンにアップデートされています：",
                it: "Il Radiocomando è stato aggiornato alla versione:",
                de: "Die Fernbedienung wurde aktualisiert auf:",
                es: "Se ha actualizado el control remoto a:",
                fr: "La radiocommande a été mise à jour vers :",
                nl: "De afstandsbediening is geüpdatet naar:",
                pt: "O telecomando foi atualizado para:",
                ru: "Пульт дистанционного управления обновлен до версии:"
            },
            upnotice4common: {
                "zh-cn": "设备已成功升级至",
                en: "The device has been updated to:",
                jp: "デバイスは次のバージョンにアップデートされています：",
                it: "Il dispositivo è stato aggiornato alla versione:",
                de: "Das Gerät wurde aktualisiert auf:",
                es: "Se ha actualizado el dispositivo a:",
                fr: "L'appareil a été mis à jour vers :",
                nl: "Het apparaat is geüpdatet naar:",
                pt: "O dispositivo foi atualizado para:",
                ru: "Устройство обновлено до версии:"
            },
            upnotice7rc: {
                "zh-cn": "遥控器已供电",
                en: "Remote Controller is powered on.",
                jp: "送信機の電源が入っています。",
                it: "Il Radiocomando è acceso.",
                de: "Die Fernbedienung ist eingeschaltet.",
                es: "El control remoto está encendido.",
                fr: "La radiocommande est sous tension.",
                nl: "De afstandsbediening is ingeschakeld.",
                pt: "O telecomando está ligado.",
                ru: "Пульт дистанционного управления включен."
            },
            upnotice7common: {
                "zh-cn": "设备已供电",
                en: "The device is powered on.",
                jp: "デバイスの電源が入っています。",
                it: "Il dispositivo è acceso.",
                de: "Das Gerät ist eingeschaltet.",
                es: "El dispositivo está encendido.",
                fr: "L'appareil est sous tension.",
                nl: "Het apparaat is ingeschakeld.",
                pt: "O dispositivo está ligado.",
                ru: "Устройство включено."
            },
            upnotice8rc: {
                description: "?",
                "zh-cn": "不要断开USB连接",
                en: "The Remote Controller is connected to the computer.",
                jp: "送信機がコンピューターに接続されています。",
                it: "Il radiocomando è collegato al computer.",
                de: "Die Fernbedienung ist mit dem Computer verbunden.",
                es: "El control remoto está conectado al ordenador.",
                fr: "La radiocommande est connectée à l'ordinateur.",
                nl: "De afstandsbediening is verbonden met de computer.",
                pt: "O telecomando está ligado ao computador.",
                ru: "Пульт дистанционного управления подключен к компьютеру."
            },
            upnotice8common: {
                description: "?",
                "zh-cn": "不要断开USB连接",
                en: "The device is connected to the computer.",
                jp: "機器がコンピューターに接続されています。",
                it: "Il dispositivo è collegato al computer.",
                de: "Das Gerät ist mit dem Computer verbunden.",
                es: "El dispositivo está conectado al ordenador.",
                fr: "L'appareil est connecté à l'ordinateur.",
                nl: "Het apparaat is aangesloten op de computer.",
                pt: "O dispositivo está ligado ao computador.",
                ru: "Устройство подключено к компьютеру."
            },
            realtimeflightdata: {
                "zh-cn": "实时飞行数据",
                en: "Real Time Flight Data",
                jp: "リアルタイムフライトデータ",
                it: "Dati di volo in tempo reale",
                de: "Echtzeit-Flugdaten",
                es: "Datos de vuelo en tiempo real",
                fr: "Données de vol en temps réel",
                nl: "Real-time vluchtgegevens",
                pt: "Dados de voo em tempo real",
                ru: "Полетные данные в режиме реального времени"
            },
            realtimeflightdataAbout: {
                "zh-cn": "欢迎使用实时飞行数据。",
                en: "Welcome to Real Time Flight Data.",
                jp: "リアルタイムフライトデータへようこそ。",
                it: "Benevenuti su Real Time Flight Data (Dati di Volo in Tempo Reale).",
                de: "Willkommen bei den Echtzeit-Flugdaten.",
                es: "Bienvenido a datos de vuelo en tiempo real.",
                fr: "Bienvenue dans la section Données de vol en temps réel.",
                nl: "Welkom bij real-time vluchtgegevens.",
                pt: "Bem-vindo aos dados de voo em tempo real.",
                ru: 'Добро пожаловать в раздел "Полетные данные в режиме реального времени".'
            },
            wind_speed_x: {
                "zh-cn": "正北方向分量",
                en: "North Component",
                jp: "北成分",
                it: "Componente Nord",
                de: "Nordgerichtete Komponente",
                es: "Componente norte",
                fr: "Composante Nord",
                nl: "Noordcomponent",
                pt: "Componente norte",
                ru: "Северный компонент"
            },
            wind_speed_y: {
                "zh-cn": "正东方向分量",
                en: "East Component",
                jp: "東成分",
                it: "Componente Est",
                de: "Ostgerichtete Komponente",
                es: "Componente este",
                fr: "Composante Est",
                nl: "Oostcomponent",
                pt: "Componente este",
                ru: "Восточный компонент"
            },
            wind_speed_z: {
                "zh-cn": "垂直向下分量",
                en: "Downward Component",
                jp: "下方成分",
                it: "Componente verso il basso",
                de: "Abwärtsgerichtete Komponente",
                es: "Componente inferior",
                fr: "Composante descendante",
                nl: "Neerwaartse component",
                pt: "Componente para baixo",
                ru: "Нижний компонент"
            },
            init_flag: {
                "zh-cn": "配置模式",
                en: "Configuration Mode",
                jp: "設定モード",
                it: "Modalità di configurazione",
                de: "Konfigurationsmodus",
                es: "Modo de configuración",
                fr: "Mode Configuration",
                nl: "Configuratiemodus",
                pt: "Modo de configuração",
                ru: "Режим конфигурирования"
            },
            setfail: {
                "zh-cn": "设置失败",
                en: "Failed to set",
                jp: "設定に失敗しました。",
                it: "Impostazione non riuscita!",
                de: "Einstellung fehlgeschlagen!",
                es: "¡El ajuste ha fallado!",
                fr: "Échec de la configuration !",
                nl: "Set mislukt!",
                pt: "A definição falhou!",
                ru: "Настройка не выполнена!"
            },
            Groundstationstatus: {
                "zh-cn": "地面站状态推送",
                en: "Ground Station Status",
                jp: "グランドステーションステータス",
                it: "Stato stazione di terra",
                de: "Status Ground Station:",
                es: "Estado de Ground Station",
                fr: "État de la station au sol",
                nl: "Status grondstation",
                pt: "Estado da estação do solo",
                ru: "Состояние наземной станции"
            },
            devtools: {
                "zh-cn": "开发者工具",
                en: "Developer Tools",
                jp: "開発者向けツール",
                it: "Strumenti per sviluppatori",
                de: "Entwickler-Tools",
                es: "Herramientas para desarrolladores",
                fr: "Outils de développement",
                nl: "Ontwikkelaarstools",
                pt: "Ferramentas de criadores",
                ru: "Средства программирования"
            },
            delaytohome: {
                "zh-cn": "秒后回到设备列表页面",
                en: "s later will direct to the device list.",
                jp: "～後機器リストに移動します。",
                it: "s sarai re-indirizzato all'elenco dispositivo",
                de: "s später erfolgt die Weiterleitung zur Geräteliste.",
                es: "s luego llevará a la lista de dispositivos.",
                fr: "s plus tard la liste d'appareils s'affichera.",
                nl: "s later om naar de lijst met apparaten te gaan.",
                pt: "s mais tarde irá direcionar para a lista de dispositivos.",
                ru: "с спустя система перенаправит вас к списку устройств."
            },
            common_insdcard_desc: {
                "zh-cn": "成功进入SD卡模式，重启设备可退出。",
                en: "Entered SD Card Mode. Restart the device to exit this mode.",
                jp: "SDカードモードに 入り、機器を再起動してこのモードを終了してください。",
                it: "Ingresso in modalità scheda SD avvenuto con successo; per uscire da questa modalità riavviare il dispositivo.",
                de: "SD-Karten-Modus wurde aktiviert. Gerät neu starten, um diesen Modus zu verlassen.",
                es: "Modo tarjeta SD establecido correctamente; reinicie el dispositivo para salir de este modo.",
                fr: "Mode Carte SD activé, redémarrez l'appareil pour quitter ce mode.",
                nl: "SD-kaartmodus ingeschakeld, start het apparaat opnieuw op om deze modus te verlaten.",
                pt: "Entrada no modo de cartão SD bem-sucedida, reinicie o dispositivo para sair deste modo.",
                ru: "Вход в режим карты SD выполнен успешно, перезапустите устройство, чтобы выйти из этого режима."
            },
            rtksetting: {
                "zh-cn": "RTK 设置",
                en: "RTK Settings",
                jp: "RTK設定",
                it: "Impostazioni RTK",
                de: "RTK-Einstellungen",
                es: "Ajustes de RTK",
                fr: "Paramètres RTK",
                nl: "RTK-instellingen",
                pt: "Definições de RTK",
                ru: "Настройки RTK"
            },
            basestation: {
                "zh-cn": "基站",
                en: "Base Station",
                jp: "基地局",
                it: "Stazione base",
                de: "Basisstation",
                es: "Estación base",
                fr: "Station de base",
                nl: "Basisstation",
                pt: "Estação base",
                ru: "Базовая станция"
            },
            airborneAntenna: {
                "zh-cn": "D-RTK",
                en: "D-RTK",
                jp: "D-RTK",
                it: "D-RTK",
                de: "D-RTK",
                es: "D-RTK",
                fr: "D-RTK",
                nl: "D-RTK",
                pt: "D-RTK",
                ru: "D-RTK"
            },
            AntennaOffset: {
                "zh-cn": "天线偏移量",
                en: "Antenna Offset",
                jp: "アンテナ補正",
                it: "Offset antenna",
                de: "Antennenversatz",
                es: "Desviación de antena",
                fr: "Décalage de l'antenne",
                nl: "Offset antenne",
                pt: "Desvio da antena",
                ru: "Смещение антенны"
            },
            Antenna: {
                "zh-cn": "天线",
                en: "Antenna",
                jp: "アンテナ",
                it: "Antenna",
                de: "Antenne",
                es: "Antena",
                fr: "Antenne",
                nl: "Antenne",
                pt: "Antena",
                ru: "Антенна"
            },
            rtksetcoordinates: {
                "zh-cn": "设置参考坐标",
                en: "Set fixed reference station coordinates",
                jp: "固定基準局の座標を設定します。",
                it: "Impostare coordinate fisse della stazione di riferimento",
                de: "Koordinaten der festen Referenzstation festlegen",
                es: "Establecer coordenadas fijas de estación de referencia",
                fr: "Définir des coordonnées fixes pour la station de référence",
                nl: "Coördinaten vast referentiestation instellen",
                pt: "Definir coordenadas fixas da estação de referência",
                ru: "Задайте координаты неподвижной опорной станции"
            },
            addevice: {
                "zh-cn": "添加设备",
                en: "Add Device",
                jp: "デバイスを追加します。",
                it: "Aggiungere dispositivo",
                de: "Gerät hinzufügen",
                es: "Añadir dispositivo",
                fr: "Ajouter un appareil",
                nl: "Apparaat toevoegen",
                pt: "Adicionar dispositivo",
                ru: "Добавить устройство"
            },
            addevicerr: {
                "zh-cn": "添加失败，请重试。",
                en: "Add Device Failed. Please Retry.",
                jp: "デバイスの追加に失敗しました。やり直してください。",
                it: "Aggiunta dispositivo non riuscita. Riprovare.",
                de: "Gerät wurde nicht hinzugefügt. Bitte erneut versuchen.",
                es: "Fallo al añadir dispositivo. Inténtelo de nuevo.",
                fr: "Échec de l'ajout de l'appareil. Réessayez.",
                nl: "Apparaat toevoegen mislukt. Probeer het opnieuw.",
                pt: "A adição de dispositivo falhou. Tente novamente.",
                ru: "Ошибка добавления устройства. Повторите попытку."
            },
            add: {
                "zh-cn": "添加",
                en: "Add",
                jp: "追加します。",
                it: "Aggiungi",
                de: "Hinzufügen",
                es: "Añadir",
                fr: "Ajouter",
                nl: "Toevoegen",
                pt: "Adicionar",
                ru: "Добавить"
            },
            clear: {
                "zh-cn": "清空",
                en: "Clear",
                jp: "消去します。",
                it: "Cancella",
                de: "Löschen",
                es: "Borrar",
                fr: "Supprimer",
                nl: "Wissen",
                pt: "Apagar",
                ru: "Сброс"
            },
            generate: {
                "zh-cn": "生成",
                en: "Generate",
                jp: "生成します。",
                it: "Genera",
                de: "Generieren",
                es: "Generar",
                fr: "Générer",
                nl: "Genereren",
                pt: "Gerar",
                ru: "Генерировать"
            },
            send: {
                "zh-cn": "发送",
                en: "Send",
                jp: "送信します。",
                it: "Invia",
                de: "Senden",
                es: "Enviar",
                fr: "Envoyer",
                nl: "Verzenden",
                pt: "Enviar",
                ru: "Отправить"
            },
            commtest: {
                "zh-cn": "链路测试",
                en: "Link Test",
                jp: "リンクテスト",
                it: "Link test",
                de: "Kopplungstest",
                es: "Comprobar enlace",
                fr: "Test de liaison",
                nl: "Verbindingstest",
                pt: "Teste de ligação",
                ru: "Проверка связи"
            },
            stopsend: {
                "zh-cn": "停止发送",
                en: "Stop",
                jp: "停止します。",
                it: "Arresto",
                de: "Stopp",
                es: "Detener",
                fr: "Arrêter",
                nl: "Stoppen",
                pt: "Parar",
                ru: "Остановить"
            },
            swUpgradeSuccess: {
                "zh-cn": "DJI Assistant 2 升级成功，重启软件可使用新版本。",
                en: "DJI Assistant 2 Updated. Restart to enjoy the new version.",
                jp: "DJI Assistant 2のアップデートに成功しました。再起動して新しいバージョンをお楽しみください。",
                it: "Aggiornamento DJI Assistant 2 completato con successo. Riavviare per utilizzare la nuova versione.",
                de: "DJI Assistant 2 wurde aktualisiert. Neu starten, um neue Version zu nutzen.",
                es: "DJI Assistant 2 se ha actualizado correctamente. Reinicie para usar la nueva versión.",
                fr: "Mise à jour de DJI Assistant 2 réussie. Redémarrez pour utiliser la nouvelle version.",
                nl: "Update DJI Assistant 2 geslaagd. Start opnieuw op om de nieuwe versie te gebruiken.",
                pt: "Atualização de DJI Assistant 2 bem-sucedida. Reiniciar para usar a nova versão.",
                ru: "Обновление DJI Assistant 2 выполнено успешно. Чтобы воспользоваться новой версией, выполните перезапуск."
            },
            swUpgrading: {
                "zh-cn": "DJI Assistant 2 正在升级。",
                en: "DJI Assistant 2 is updating..",
                jp: "DJI Assistant 2のアップデート中です・・・・",
                it: "Aggiornamento DJI Assistant 2 in corso...",
                de: "DJI Assistant 2 wird aktualisiert...",
                es: "DJI Assistant 2 se está actualizando...",
                fr: "Mise à jour de DJI Assistant 2...",
                nl: "DJI Assistant 2 updaten...",
                pt: "A atualizar DJI Assistant 2.",
                ru: "Обновление DJI Assistant 2..."
            },
            Notice: {
                "zh-cn": "注意",
                en: "Note",
                jp: "注記",
                it: "Nota",
                de: "Hinweis",
                es: "Nota",
                fr: "Remarque",
                nl: "Opmerking",
                pt: "Nota",
                ru: "Примечание"
            },
            SimulatorNotice1: {
                "zh-cn": "• 为避免电机意外启动，请在使用模拟器前拆卸桨叶，并避免人和物体与电机直接接触。",
                en: "• Remove the propellers before using the Simulator to avoid injuries. DO NOT touch the motors during using the Simulator.",
                jp: "・怪我しないように、シミュレーターを使用する前に、プロペラを取り外してください。シミュレーターの使用は、モーターに触れないでください。",
                it: "• Rimuovere le eliche prima di utilizzare il Simulatore per evitare lesioni. NON toccare i motori durante l'utilizzo del Simulatore.",
                de: "• Zum Schutz vor Verletzungen die Propeller vor Benutzung des Simulators abnehmen. Während der Simulation NICHT die Motoren berühren.",
                es: "• Retire las hélices antes de usar el simulador para evitar lesiones. NO toque los motores mientras usa el simulador.",
                fr: "• Retirez les hélices avant d'utiliser le simulateur pour éviter tout risque de blessure. NE TOUCHEZ PAS les moteurs lors de l'utilisation du simulateur.",
                nl: "• Verwijder de propellers voordat u de simulator gebruikt om verwondingen te voorkomen. Raak de motoren tijdens het gebruik van de simulator NIET aan.",
                pt: "• Retirar as hélices antes de utilizar o simulador para evitar ferimentos. NÃO tocar nos motores durante a utilização do simulador.",
                ru: "• Во избежание травм снимите винты перед использованием симулятора. ЗАПРЕЩАЕТСЯ касаться двигателей во время использования симулятора."
            },
            SimulatorNotice2: {
                "zh-cn": "• 请务必在结束使用此模拟器后在DJI GO App中检查并还原您的飞行设置。",
                en: "• DO check and reset the settings in DJI GO app after using the Simulator.",
                jp: "シミュレーターを使用した後、DJI GOアプリで設定を確認しリセットしてください。",
                it: "• IMPORTANTE: controllare e ripristinare le impostazioni della app DJI GO dopo aver utilizzato il Simulatore.",
                de: "• Nach der Simulation die Einstellungen der „DJI GO“-App prüfen und zurücksetzen.",
                es: "• COMPRUEBE y RESTABLEZCA los ajustes de la aplicación DJI GO después de usar el simulador.",
                fr: "• Vérifiez et réinitialisez les paramètres dans l'application DJI GO suite à l'utilisation du simulateur.",
                nl: "• Controleer en reset de instellingen in de DJI GO-app nadat u de simulator hebt gebruikt.",
                pt: "• Verificar e repor as definições na aplicação DJI GO depois de utilizar o simulador.",
                ru: "• ОБЯЗАТЕЛЬНО проверьте и сбросьте настройки в приложении DJI GO после использования симулятора."
            },
            SimulatorNotice3: {
                "zh-cn": "• 模拟器的使用不受特殊限飞区域的影响。",
                en: "• No-Fly-Zone Limit is not effective in the Simulator.",
                jp: "シミュレーターでは飛行禁止区域は制限されています。",
                it: "• Il limite della zona vietata al volo nel Simulatore non è operativo.",
                de: "• Grenzwert der Flugverbotszonen ist im Simulator nicht gültig.",
                es: "• El límite de zona de exclusión aérea no tiene vigor en el simulador.",
                fr: "• La limite de zone n'est pas applicable dans le simulateur.",
                nl: "• De No Fly Zone-limiet is niet effectief in de simulator.",
                pt: "• O limite da zona de exclusão aérea não é aplicado no simulador.",
                ru: '• Функция "Предел зоны, запрещенной для полетов" не действует в режиме симулятора.'
            },
            notification: {
                "zh-cn": "通知",
                en: "Notification",
                jp: "通知",
                it: "Notifica",
                de: "Benachrichtigung",
                es: "Notificación",
                fr: "Notification",
                nl: "Melding",
                pt: "Notificação",
                ru: "Уведомление"
            },
            notshowagain: {
                "zh-cn": "不再提示",
                en: "Not Shown Again",
                jp: "今後表示しない",
                it: "Non mostrare più",
                de: "Nicht mehr anzeigen",
                es: "No mostrar de nuevo",
                fr: "Ne plus afficher",
                nl: "Niet opnieuw tonen",
                pt: "Não apresentar novamente",
                ru: "Повторно не показано"
            },
            releaseNote: {
                "zh-cn": "更新日志",
                en: "Release Note",
                jp: "リリースノート",
                it: "Nota di rilascio",
                de: "Versionshinweise",
                es: "Nota de lanzamiento",
                fr: "Note de version",
                nl: "Release-opmerking",
                pt: "Nota de lançamento",
                ru: "Примечание к выпуску"
            },
            compressing: {
                "zh-cn": "正在压缩..",
                en: "Compressing file..",
                jp: "ファイルを圧縮中です・・・",
                it: "Compressione file in corso...",
                de: "Datei wird komprimiert...",
                es: "Comprimiendo archivo...",
                fr: "Compression du fichier...",
                nl: "Bestand comprimeren....",
                pt: "Ao comprimir ficheiro...",
                ru: "Сжатие файла.."
            },
            meter: {
                "zh-cn": "米",
                en: "m",
                jp: "m",
                it: "m",
                de: "m",
                es: "m",
                fr: "m",
                nl: "m",
                pt: "m",
                ru: "м"
            },
            activatetit_m600: {
                "zh-cn": "激活您的M600飞行器",
                en: "ACTIVATE YOUR M600",
                jp: "M600を起動してください",
                it: "ATTIVARE L'M600",
                de: "M600 AKTIVIEREN",
                es: "ACTIVE SU M600",
                fr: "ACTIVEZ VOTRE M600",
                nl: "UW M600 ACTIVEREN",
                pt: "ATIVAR O SEU M600",
                ru: "АКТИВИРУЙТЕ M600"
            },
            activatedesc_m600: {
                "zh-cn": "首次使用M600时，需要对产品进行激活。激活后，您将获得1年的保修。",
                en: "Activate your M600 when you first connect it to the app. It will also activate your 1-year warranty.",
                jp: "アプリにつなげてM600を起動してください。これにより1年保証に登録できます",
                it: "Attivare l'M600 la prima volta che viene collegato alla app. Così facendo attiverete la vostra garanzia di 1 anno.",
                de: "Aktivieren Sie Ihre M600, wenn Sie die Verbindung zur App herstellen. Dabei wird auch Ihre 1-Jahres-Garantie aktiviert.",
                es: "Active su M600 la primera vez que lo conecte a la aplicación. Al hacerlo activará su garantía de un año.",
                fr: "Activez votre M600 lors de sa première connexion à l'application. Cette opération activera également votre garantie d'un (1) an.",
                nl: "Activeer uw M600 wanneer u deze voor de eerste keer verbindt met de app. Uw 1-jarige garantie wordt dan ook meteen geactiveerd.",
                pt: "Ative o seu M600 quando o ligar à aplicação pela primeira vez. Ao fazê-lo, irá também ativar a sua garantia de 1 ano.",
                ru: "Активируйте свой M600 при первом подключении к приложению. При этом также будет активирована ваша гарантия сроком на 1 год."
            },
            activatedesc2_m600: {
                "zh-cn": "您的M600信息将与该账号绑定。绑定后该账号信息将作为保修凭证，请确保账户信息正确。",
                en: "M600’s information will be bound to this account and serves as proof of your warranty. Confirm the account is correct."
            },
            activatetit_m600pro: {
                "zh-cn": "激活您的M600 Pro飞行器",
                en: "ACTIVATE YOUR M600 Pro"
            },
            activatedesc_m600pro: {
                "zh-cn": "首次使用M600 Pro时，需要对产品进行激活。激活后，您将获得1年的保修。",
                en: "Activate your M600 Pro when you first connect it to the app. It will also activate your 1-year warranty."
            },
            activatedesc2_m600pro: {
                "zh-cn": "您的M600 Pro信息将与该账号绑定。绑定后该账号信息将作为保修凭证，请确保账户信息正确。",
                en: "M600 Pro’s information will be bound to this account and serves as proof of your warranty. Confirm the account is correct."
            },
            connect_gear_tips: {
                "zh-cn": "请连接起落架。",
                en: "Connect the gear to main controller as Fig. shown.",
                jp: "イメージ図の通りギアを送信機に接続してください。",
                it: "Collegare il carrello al dispositivo di controllo principale come illustrato nella Fig.",
                de: "Das Landegestell mit dem Flugcontroller verbinden (siehe Abb.).",
                es: "Conecte el tren de aterrizaje al controlador principal como se muestra en la figura.",
                fr: "Connectez l'appareil au contrôleur principal, comme illustré sur la figure correspondante.",
                nl: "Sluit de uitrusting aan op de hoofdcontroller zoals afgebeeld.",
                pt: "Conecte a engrenagem ao controlador principal conforme ilustrado na Fig.",
                ru: "Подсоедините устройство к главному контроллеру, как показано на рисунке."
            },
            torsion: {
                "zh-cn": "偏航行程",
                en: "Yaw Endpoint",
                jp: "ヨー終点",
                it: "Estremità Imbardata",
                de: "Gier-Endpunkt",
                es: "Punto final de guiñada",
                fr: "Point de terminaison du lacet",
                nl: "Eindpunt gieren",
                pt: "Posição final da guinada",
                ru: "Конечная точка рыскания"
            },
            aircraft_too_far: {
                "zh-cn": "飞机太远，请移近飞机",
                en: " Aircraft too Far From Screen. Move it closer. ",
                jp: "?機体が画面から離れすぎています。近づけてください。?",
                it: " Velivolo troppo lontano dallo schermo. Avvicinarlo. ",
                de: " Drohne zu weit vom Bildschirm entfernt. Näher heranführen. ",
                es: " La aeronave está demasiado lejos de la pantalla. Acérquela más. ",
                fr: " L'appareil est trop loin de l'écran. Rapprochez l'appareil. ",
                nl: " Luchtvaartuig te ver van het scherm. Breng het dichterbij. ",
                pt: " Aeronave demasiado longe do ecrã. Aproxime-a. ",
                ru: " Летательный аппарат находится слишком далеко от экрана. Переместите его ближе. "
            },
            align_freq: {
                "zh-cn": "天空端对频",
                en: "Linking Air System",
                jp: "Air Systemをリンク中です",
                it: " Collegamento sistema aereo in corso.",
                de: " Flugsystem wird gekoppelt",
                es: " Vinculando Air System...",
                fr: " Liaison du Air System",
                nl: " Air System koppelen",
                pt: " A ligar ao Air System",
                ru: " Подключение к Air System"
            },
            groundstation: {
                "zh-cn": "地面站",
                en: "Ground Station",
                jp: "Ground Station",
                it: "Stazione di terra",
                de: "Ground Station",
                es: "Ground Station",
                fr: "Station au sol",
                nl: "Grondstation",
                pt: "Estação do solo",
                ru: "Наземная станция"
            },
            nofirmware: {
                "zh-cn": "没有可升级固件。",
                en: "No Firmware to Update.",
                jp: "アップデートするファームウェアがありません。",
                it: "Nessun firmware da aggiornare.",
                de: "Firmware muss nicht aktualisiert werden.",
                es: "No hay actualizaciones de firmware.",
                fr: "Aucun micrologiciel à mettre à jour.",
                nl: "Geen firmware om te updaten.",
                pt: "Nenhum firmware para atualizar.",
                ru: "Обновления для микропрограммного обеспечения отсутствуют."
            },
            Fan: {
                "zh-cn": "风扇",
                en: "Fan",
                jp: "ファン",
                it: "Ventola",
                de: "Lüfter",
                es: "Ventilador",
                fr: "Ventilateur",
                nl: "Ventilator",
                pt: "Ventilador",
                ru: "Вентилятор"
            },
            map_your_gear: {
                "zh-cn": "请映射你的起落架到F通道。",
                en: "Map your gear first.",
                jp: "まずお使いの装置をマッピングしてください。",
                it: "Mappare prima il carrello.",
                de: "Landegestell zunächst zuweisen.",
                es: "Asigne primero un botón a su tren de aterrizaje.",
                fr: "Cartographiez d'abord l'appareil.",
                nl: "Maak eerst een overzicht van uw uitrusting.",
                pt: "Mapeie o seu trem de aterragem em primeiro lugar.",
                ru: "Сначала выполните привязку шасси к определенной кнопке."
            },
            click_to_set: {
                "zh-cn": "立即设置",
                en: "Click here",
                jp: "ここをクリックします。",
                it: "Fare clic qui",
                de: "Hier klicken",
                es: "Haga clic aquí",
                fr: "Cliquez ici",
                nl: "Klik hier",
                pt: "Clique aqui",
                ru: "Нажмите здесь"
            },
            return_home_short: {
                "zh-cn": "返航",
                en: "Return Home",
                jp: "帰還しますか？",
                it: "Home",
                de: "Startseite",
                es: "Inicio",
                fr: "Accueil",
                nl: "Begin",
                pt: "Posição inicial",
                ru: "Возврат в главное меню"
            },
            gear_short: {
                "zh-cn": "起落架",
                en: "Gear",
                jp: "装置",
                it: "Carrello",
                de: "Landegestell",
                es: "Tren de aterrizaje",
                fr: "Appareil",
                nl: "Uitrusting",
                pt: "Engrenagem",
                ru: "Шасси"
            },
            gear_short_status: {
                "zh-cn": "状态",
                en: "status",
                jp: "ステータス",
                it: "status",
                de: "status",
                es: "status",
                fr: "status",
                nl: "status",
                pt: "status",
                ru: "status"
            },
            certificate: {
                "zh-cn": "证书",
                en: "Certificate",
                jp: "証明書",
                it: "Certificato",
                de: "Zertifikat",
                es: "Certificado",
                fr: "Certificat",
                nl: "Certificaat",
                pt: "Certificado",
                ru: "Сертификат"
            },
            ChooseGimbalReceiverType: {
                "zh-cn": "选择云台控制类型",
                en: "Choose Gimbal Control Type",
                jp: "ジンバルの制御タイプを選択します。",
                it: "Scegliere tipo di controllo gimbal",
                de: "Gimbal-Steuerungstyp wählen",
                es: "Elija el tipo de control de gimbal",
                fr: "Sélectionnez le type de contrôle de la nacelle",
                nl: "Het controletype voor de gimbal selecteren",
                pt: "Selecionar tipo de controlo da suspensão cardã",
                ru: "Выберите тип управления подвесом"
            },
            switch_to_lb2_noti: {
                "zh-cn": "请用CAN线连接主控与云台，并重启云台。",
                en: "Connect the main controller and gimbal with a CAN cable, and then restart the gimbal.",
                jp: "CANケーブルを使ってメインコントローラーとジンバルを接続してからジンバルを再起動します。",
                it: "Collegare il dispositivo di controllo principale e il gimbal con un cavo CAN, quindi riavviare il gimbal.",
                de: "Flugcontroller und Gimbal mit einem CAN-Kabel verbinden und dann den Gimbal neu starten.",
                es: "Conecte el controlador principal y el gimbal mediante un cable CAN y reinicie el gimbal.",
                fr: "Connectez le contrôleur principal à la nacelle à l'aide d'un câble CAN, puis redémarrez la nacelle.",
                nl: "Sluit de hoofdcontroller en gimbal aan met een CAN-kabel en start de gimbal vervolgens opnieuw op.",
                pt: "Conecte o controlador principal e a suspensão cardã a um cabo CAN e, em seguida, reinicie a suspensão cardã.",
                ru: "Соедините главный контроллер и подвес с помощью кабеля CAN, затем перезапустите подвес."
            },
            switch_to_sbus_noti: {
                "zh-cn": "如使用Ronin-MX云台，请断开主控与云台连接的CAN线，并重启云台。",
                en: "To use Ronin-MX Gimbal, disconnect the CAN cable and then restart the gimbal.",
                jp: "Ronin-MXのジンバルを使用するには、 CANケーブルを外してからジンバルを再起動します。",
                it: "Se si intende usare il gimbal Ronin-MX, scollegare il cavo CAN e quindi riavviare il gimbal.",
                de: "Beim Ronin-MX Gimbal das CAN-Kabel trennen und dann den Gimbal neu starten.",
                es: "Si va a usar el gimbal Ronin-MX, desconecte el cable CAN y reinicie el gimbal.",
                fr: "Si vous utilisez une nacelle Ronin-MX, déconnectez le câble CAN, puis redémarrez la nacelle.",
                nl: "Gebruikt u de Ronin-MX-gimbal? Ontkoppel de CAN-kabel dan en start de gimbal vervolgens opnieuw op.",
                pt: "Se pretender utilizar a suspensão cardão Ronin-MX, desligue o cabo CAN e, em seguida, reinicie a suspensão.",
                ru: "Если предстоит использовать подвес Ronin-MX, отсоедините кабель CAN и перезапустите подвес."
            },
            flylimit_h_update_notice: {
                "zh-cn": "返航高度不能高于当前限高，返航高度将更新为：",
                en: "Return-to-Home Altitude Should not Exceed Max Altitude. Return-to-Home Altitude will update to:",
                jp: "リターントゥホーム高度は、最大高度以下にしてください。リターントゥホーム高度を更新します：",
                it: "L'altitudine del Return To Home non deve eccedere l'altitudine massima. L'altitudine di ritorno alla posizione iniziale verrà aggiornata alla versione:",
                de: "Rückkehr-Flughöhe darf maximale Flughöhe nicht überschreiten. Rückkehr-Flughöhe wird aktualisiert auf:",
                es: "La altitud de regreso al punto de origen no debe superar la altitud máxima. La altitud de regreso al punto de origen se actualizará a:",
                fr: "L'altitude de retour au point de départ ne doit pas dépasser l'altitude maximale. L'altitude de retour au point de départ va être mise à jour vers :",
                nl: "Return-to-Home-hoogte mag niet hoger zijn dan max. hoogte. Return-to-Home-hoogte wordt geüpdatet naar:",
                pt: "Altitude para Voltar à posição inicial não deve exceder a altitude máx. Altitude para Voltar à posição inicial será atualizada para:",
                ru: "Высота возврата домой не должна превышать максимальную высоту. Высота возврата домой обновлена до значения:"
            },
            signuplink: {
                "zh-cn": "https://account.dji.com/user/register.html?appId=store&backUrl=https%3A%2F%2Faccounts.dji.com%2Fcn%2Fuser&locale=zh_CN",
                en: "https://account.dji.com/user/register.html?appId=store&backUrl=https%3A%2F%2Faccounts.dji.com%2Fuser&locale=en_US",
                jp: "https://account.dji.com/user/register.html?appId=store&backUrl=https%3A%2F%2Faccounts.dji.com%2Fjp%2Fuser&locale=ja_JP",
                it: "https://account.dji.com/user/register.html?appId=store&backUrl=https%3A%2F%2Faccounts.dji.com%2Fuser&locale=en_US",
                de: "https://account.dji.com/user/register.html?appId=store&backUrl=https%3A%2F%2Faccounts.dji.com%2Fuser&locale=en_US",
                es: "https://account.dji.com/user/register.html?appId=store&backUrl=https%3A%2F%2Faccounts.dji.com%2Fuser&locale=en_US",
                fr: "https://account.dji.com/user/register.html?appId=store&backUrl=https%3A%2F%2Faccounts.dji.com%2Fuser&locale=en_US",
                nl: "https://account.dji.com/user/register.html?appId=store&backUrl=https%3A%2F%2Faccounts.dji.com%2Fuser&locale=en_US",
                pt: "https://account.dji.com/user/register.html?appId=store&backUrl=https%3A%2F%2Faccounts.dji.com%2Fuser&locale=en_US",
                ru: "https://account.dji.com/user/register.html?appId=store&backUrl=https%3A%2F%2Faccounts.dji.com%2Fuser&locale=en_US"
            },
            factory_reset: {
                "zh-cn": "恢复出厂设置",
                en: "Restore Factory Defaults",
                jp: "工場出荷時の初期設定に復元します。",
                it: "Ripristino impostazioni di fabbrica",
                de: "Auf Lieferzustand zurücksetzen",
                es: "Restablecer a ajustes de fábrica",
                fr: "Restauration des paramètres d'usine",
                nl: "Fabrieksinstellingen herstellen",
                pt: "Reposição de fábrica",
                ru: "Восстановление заводских настроек"
            },
            go_factory_reset_confirm: {
                "zh-cn": "确定要恢复出厂设置吗？",
                en: "Restore Factory Defaults?",
                jp: "工場出荷時の初期設定に復元します？",
                it: "Sei sicuro di voler ripristinare le impostazioni di fabbrica?",
                de: "Sollen die Werkseinstellungen wiederhergestellt werden?",
                es: "¿Seguro que desea restablecer los ajustes de fábrica?",
                fr: "Voulez-vous vraiment restaurer les paramètres d'usine ?",
                nl: "Weet u zeker dat u de fabrieksinstellingen wilt herstellen?",
                pt: "Tem a certeza de que pretende repor as definições de fábrica?",
                ru: "Вы точно хотите восстановить заводские настройки?"
            },
            factory_reseting: {
                "zh-cn": "正在恢复出厂设置...",
                en: "Restoring Factory Defaults",
                jp: "工場出荷時の初期設定に復元中です。",
                it: "Ripristino delle impostazioni di fabbrica in corso...",
                de: "Werkseinstellungen werden wiederhergestellt…",
                es: "Restaurando ajustes de fábrica…",
                fr: "Restauration des paramètres d'usine…",
                nl: "Fabrieksinstellingen herstellen…",
                pt: "Para repor as definições de fábrica…",
                ru: "Восстановление заводских настроек…"
            },
            factory_reset_success: {
                "zh-cn": "恢复出厂设置成功！",
                en: "Factory Reset Success!",
                jp: "工場出荷時の設定のリセットに成功しました。",
                it: "Ripristino impostazioni di fabbrica completato con successo!",
                de: "Werkseinstellungen wurden wiederhergestellt!",
                es: "El restablecimiento de fábrica ha finalizado correctamente.",
                fr: "Restauration d'usine réussie !",
                nl: "Fabrieksinstellingen herstellen geslaagd!",
                pt: "Reposição de fábrica bem-sucedida!",
                ru: "Восстановление заводских настроек выполнено успешно!"
            },
            factory_reset_fail: {
                "zh-cn": "恢复出厂设置失败！",
                en: "Factory Reset Failed!",
                jp: "工場出荷時の設定をリセットできませんでした。",
                it: "Ripristino impostazioni di fabbrica non riuscito!",
                de: "Werkseinstellungen wurden nicht wiederhergestellt!",
                es: "El restablecimiento a ajustes de fábrica ha fallado.",
                fr: "Échec de la restauration d'usine !",
                nl: "Fabrieksinstellingen herstellen mislukt!",
                pt: "A reposição de fábrica falhou!",
                ru: "Восстановление заводских настроек не выполнено!"
            },
            formal: {
                "zh-cn": "官方",
                en: "Official",
                jp: "公式な",
                it: "Ufficiale",
                de: "Offiziell",
                es: "Oficial",
                fr: "Officiel",
                nl: "Officieel",
                pt: "Oficial",
                ru: "Официальн."
            },
            internal: {
                "zh-cn": "内部",
                en: "Internal",
                jp: "内部の",
                it: "Interno",
                de: "Intern",
                es: "Interno",
                fr: "Interne",
                nl: "Intern",
                pt: "Interno",
                ru: "Внутренн."
            },
            beta: {
                "zh-cn": "Beta",
                en: "Beta",
                jp: "ベータ",
                it: "Beta",
                de: "Beta",
                es: "Beta",
                fr: "Bêta",
                nl: "Bèta",
                pt: "Beta",
                ru: "Beta"
            },
            deprecated: {
                "zh-cn": "弃用",
                en: "deprecated",
                jp: "非推奨の",
                it: "Disapprovato",
                de: "Überholt",
                es: "Obsoleto",
                fr: "Obsolète",
                nl: "Afgekeurd",
                pt: "Obsoleto",
                ru: "Устаревш."
            },
            ellipsoid_alti: {
                "zh-cn": "海拔高",
                en: "Altitude"
            },
            join_questionaire: {
                "zh-cn": "参与问卷调查",
                en: "Questionaire",
                jp: "アンケート",
                it: "Questionario",
                de: "Fragebogen",
                es: "Cuestionario",
                fr: "Questionnaire",
                nl: "Vragenlijst",
                pt: "Questionário",
                ru: "Опрос",
                ko: "설문"
            },
            dpt_pro: {
                "zh-cn": "高端版",
                en: "Pro",
                jp: "Pro",
                de: "Pro",
                fr: "Pro",
                ko: "프로"
            },
            dpt_standard: {
                "zh-cn": "低端版",
                en: "Standard",
                jp: "Standard",
                de: "Standard",
                fr: "Standard",
                ko: "스탠다드"
            },
            "3dtof": {
                "zh-cn": "3D TOF",
                en: "3D TOF",
                jp: "3D TOF",
                de: "3D TOF",
                fr: "3D TOF",
                ko: "3D TOF"
            },
            tof: {
                "zh-cn": "TOF",
                en: "TOF",
                jp: "TOF",
                de: "TOF",
                fr: "TOF",
                ko: "TOF"
            },
            ultrasonic: {
                "zh-cn": "超声波",
                en: "Ultrasonic",
                jp: "超音波",
                de: "Ultraschall",
                fr: "Ultrasonique",
                ko: "초음파"
            },
            run_mode: {
                "zh-cn": "运行模式",
                en: "Run Mode",
                jp: "実行モード",
                de: "Rennmodus",
                fr: "Mode Run",
                ko: "실행 모드"
            },
            operating_mode: {
                "zh-cn": "工作模式",
                en: "Operation Mode",
                jp: "操作モード",
                de: "Betriebsmodus",
                fr: "Mode de fonctionnement",
                ko: "작동 모드"
            },
            clearing: {
                "zh-cn": "解除绑定信息",
                en: "Clearing bound information",
                jp: "関連付けられた情報を消去中です。",
                de: "Verbindungsinformationen werden gelöscht",
                fr: "Suppression des informations liées",
                ko: "관련 정보 삭제 중"
            },
            full_duplex_mode: {
                "zh-cn": "双向模式",
                en: "Full Duplex Mode",
                jp: "全二重モード",
                de: "Full Duplex Modus",
                fr: "Mode Full Duplex",
                ko: "Full Duplex Mode (전 2중 방식 모드)"
            },
            full_duplex_mode_desc: {
                "zh-cn": "电台工作在全双工模式，可以同时收发数据，适用于点对点传输方式。",
                en: "In Full  Duplex mode, DATALINK PRO transmits and receives data simultaneously. This is  useful for point-to-point communications.",
                jp: "全二重モードでは、Datalink Proはデータの送受信を同時に行います。この機能は２地点間通信に役立ちます。"
            },
            full_duplex_mode_subinfo: {
                "zh-cn": "* 双向模式：只能支持1台移动端设备",
                en: "* Full Duplex Mode:  Only supports one Mobile Station.",
                jp: "*全二重モード ?１つのモバイルステーションにのみ対応しています。"
            },
            broadcast_mode: {
                "zh-cn": "广播模式",
                en: "Broadcast Mode",
                jp: "放送モード",
                de: "Broadcast-Modus",
                fr: "Mode Diffusion",
                ko: "Broadcast Mode (방송 모드)"
            },
            broadcast_mode_desc: {
                "zh-cn": "设备的所有端口工作于单工模式，数据只能从基站传到移动端，适用于点对多点单向传输而移动端不需要回传数据",
                en: "In Broadcast Mode, DATALINK PRO transmits data from the Base Station to one or  more Mobile Station(s). This is useful for point to multi-point transmissions that do not require the Mobile Station(s) to return data.",
                jp: "放送モードでは、Datalink Proは基地局からのデータを１つ以上のモバイルステーションに伝送します。この機能は、モバイルステーションがデータを返す必要がないポイント?トゥ?マルチポイント伝送に役立ちます。"
            },
            broadcast_mode_subinfo: {
                "zh-cn": "广播模式：可支持32台移动端设备",
                en: "Broadcast Mode:  Supports 32 Mobile Stations Devices.",
                jp: "放送モード：?32のモバイルステーション機器に対応しています。"
            },
            full_duplex_mode_set_success: {
                "zh-cn": "已成功设置为“双向模式”，请重启设备使设置生效。",
                en: "Full Duplex Mode Set. Restart the device to enable the settings.",
                jp: "全二重モードが設定されました。デバイスを再起動して設定を有効にします。"
            },
            broadcast_mode_set_success: {
                "zh-cn": "已成功设置为“广播模式”，请重启设备使设置生效。",
                en: "Broadcast Mode Set. Restart the device to enable the settings.",
                jp: "放送モードが設定されました。デバイスを再起動して設定を有効にします。"
            },
            radio_clearing_tit: {
                "zh-cn": "清除绑定设备信息",
                en: "Clear bound device information",
                jp: "関連付けられた機器の情報を消去します。",
                de: "Zuvor verbundene Geräteinformationen löschen",
                fr: "Supprimer les informations de l'appareil associé",
                ko: "관련 정보 삭제"
            },
            radio_clearing_desc1: {
                "zh-cn": "解除基站与所有移动站之间的绑定信息。",
                en: "Clearing the cache on the Base Station and associated Mobile Devices will unbind the devices.",
                jp: "基地局と関連するモバイルデバイスのキャッシュの消去によりデバイスは解放されます。",
                de: "Zwischenspeicher auf der Basisstation löschen um verbundene mobile Stationen zu trennen.",
                fr: "Supprimer le cache de l'unité au sol et des appareils mobiles associés annulera l'appairage.",
                ko: "기지국과 관련 모바일 기기의 캐시를 삭제하면 기기의 연동이 해제됩니다."
            },
            radio_clearing_desc2: {
                "zh-cn": "解除绑定后，基站与移动站之间不能正常通信，必须再次对频连接后才能通信。",
                en: "When unbound, the Base Station and Mobile Station(s) will not be able to communicate properly. You can recover communication by relinking the devices.",
                jp: "解放されると、基地局とモバイルステーションは正しく通信をおこなうことができません。デバイスを再接続することで、通信を回復させることができます。",
                de: "Nach der Trennung sind Basisstationen und mobile Stationen nicht mehr in der Lage effektiv zu kommunizieren. Die Kommunkation kann durch Neuverknüpfung der Geräte wiederhergestellt werden",
                fr: "Une fois déliée, les unités au sol et mobiles ne pourront plus communiquer correctement. La communication peut être rétablie en appairant à nouveau les appareils.",
                ko: "연동이 해제되면, 기지국과 모바일 기기 사이의 통신이 제대로 이루어지지 않습니다. 기기를 다시 연동하여 통신을 복구할 수 있습니다."
            },
            radio_clear_success: {
                "zh-cn": "解绑成功",
                en: "Unbind Success",
                jp: "解除に成功しました。"
            },
            radio_clear_fail: {
                "zh-cn": "解绑失败",
                en: "Unbind Failed",
                jp: "解除できませんでした。"
            },
            need_driver_notice: {
                "zh-cn": "驱动未安装，请使用安装文件安装驱动。",
                en: "Driver not Installed. Install drivers with installation package first.",
                jp: "ドライバがインストールされていません。まず、インストールパッケージを使ってドライバをインストールします。",
                de: "Treiber nicht installiert Treiber zunächst mit Installationspaket installieren",
                fr: "Pilotes non-installés Installez d'abord les pilotes fournis lors de la première installation.",
                ko: "드라이버가 설치되지 않았습니다. 설치 패키지를 통해 드라이버를 설치해주십시오."
            },
            start_cali: {
                "zh-cn": "开始校准",
                en: "Start Calibration",
                jp: "キャリブレーションを開始します。",
                de: "Kalibrierung starten",
                fr: "Démarrez le calibrage",
                ko: "캘리브레이션 시작"
            },
            activatetit_rtk: {
                "zh-cn": "激活您的D-RTK",
                en: "ACTIVATING D-RTK",
                jp: "D-RTKのアクティベーションを実施します。",
                de: "D-RTK AKTIVIEREN",
                fr: "ACTIVATION D-RTK",
                ko: "D-RTK 활성화 중"
            },
            activatedesc_rtk: {
                "zh-cn": "首次使用D-RTK时，需要对产品（地面端和天空端）进行激活，激活后您将获得一年的保修。",
                en: "Activate your D-RTK (including Air and Ground System) when you first connect it to the app. Doing so will also activate your 1-year warranty.",
                jp: "初めてアプリに接続する場合、（ Air SystemandとGround Systemも含め）D-RTK をアクティベートします。それによって１年の保証も有効になります。"
            },
            activatedesc2_rtk: {
                "zh-cn": "您的D-RTK信息将与该账号绑定。绑定后该账号信息将作为保修凭证，请确保账户信息正确。",
                en: "D-RTK’s information will be bound to this account. It also serves as proof of your warranty. Please confirm the account is correct."
            },
            full_duplex_mode_set_failed: {
                "zh-cn": "设置模式“双向模式”失败，请重新上电后重试。",
                en: "Failed to set to Full Duplex Mode. Restart the device and try again.",
                jp: "全二重モードに設定できませんでした。デバイスを再起動し、やり直してください。"
            },
            broadcast_mode_set_failed: {
                "zh-cn": "设置模式“广播模式”失败，请重新上电后重试。",
                en: "Failed to set to Broadcast Mode. Restart the device and try again.",
                jp: "放送モードに設定できませんでした。デバイスを再起動し、やり直してください。"
            },
            pose_error: {
                "zh-cn": "姿态错误，请按图示握持飞机 - 用户把飞机拿反了的情况",
                en: "Attitude Error.",
                jp: "姿勢エラー"
            },
            offset_too_much: {
                "zh-cn": "偏移过多, 请仅仅旋转飞机",
                en: "Aircraft Offset Too Much. Rotate the aircraft only.",
                jp: "機体のオフセットが大きすぎます。機体だけを回転させてください。"
            },
            undetected: {
                "zh-cn": "未检测到标定图案",
                en: "Unable to Detect Calibration Image",
                jp: "キャリブレーション画像を検出できません。",
                de: "Kalibrierungsbild kann nicht gefunden werden",
                fr: "Détection de l'image d'étalonnage impossible",
                ko: "캘리브레이션 이미지 감지 실패"
            },
            up_plane: {
                "zh-cn": "飞机太偏，向上移动飞机",
                en: "Aircraft Offset. Move up the aircraft.",
                jp: "機体のオフセット 機体を上げます。"
            },
            down_plane: {
                "zh-cn": "飞机太偏，向下移动飞机",
                en: "Aircraft Offset. Move down the aircraft.",
                jp: "機体のオフセット 機体を下げます。"
            },
            left_plane: {
                "zh-cn": "飞机太偏，向左移动飞机",
                en: "Aircraft Offset. Move left the aircraft.",
                jp: "機体のオフセット 機体を左に移動します。"
            },
            right_plane: {
                "zh-cn": "飞机太偏，向右移动飞机",
                en: "Aircraft Offset. Move right the aircraft.",
                jp: "機体のオフセット 機体を右に移動します。"
            },
            advanceSetting: {
                "zh-cn": "高级设置",
                en: "Advanced Settings",
                jp: "設定",
                de: "Erweiterte Einstellungen",
                fr: "Paramètres avancés",
                ko: "고급 설정"
            },
            auto_testing: {
                "zh-cn": "自动化测试",
                en: "Auto Test",
                jp: "Auto Test",
                de: "Automatischer Test",
                fr: "Auto Test",
                ko: "자동 테스트"
            },
            others: {
                "zh-cn": "其他",
                en: "Others",
                jp: "その他",
                de: "Sonstiges",
                fr: "Autres",
                ko: "기타"
            },
            rcsettings: {
                description: "//Wifi Settings",
                "zh-cn": "RC设置",
                en: "Remote Controller Settings",
                jp: "RC設定",
                de: "Einstellungen der Fernbedienung",
                fr: "Paramètres de la radiocommande",
                ko: "조종기 설정"
            },
            wifiset: {
                "zh-cn": "WIFI设置",
                en: "WiFi Settings",
                jp: "WIFI設定"
            },
            activatetit_common: {
                "zh-cn": "激活您的设备",
                en: "Activate Device…",
                jp: "デバイスをアクティベートします??。"
            },
            activatedesc_common: {
                "zh-cn": "首次使用该产品时，需要对产品进行激活，激活后您将获得一年的保修。",
                en: "Activate your device when you first connect it to the app. Doing so will also activate your 1-year warranty.",
                jp: "お使いのデバイスを初めてアプリに接続する場合、アクティベーションを実施します。それによって１年の保証も有効になります。",
                de: "Aktivieren Sie Ihr Gerät bei erster Verbindung mit der App Dies gewährt Ihnen einen Garantieanspruch von einem Jahr",
                fr: "Activez votre appareil lorsque vous vous connectez pour la première fois à l'application. Cela activera votre garantie d'un an.",
                ko: "처음 앱에 연결했을 때 기기를 활성화시켜 주십시오. 활성화와 동시에 1년 워런티도 활성화됩니다."
            },
            activatedesc2_common: {
                "zh-cn": "您的设备信息将与该账号绑定。绑定后该账号信息将作为保修凭证，请确保账户信息正确。",
                en: "Information of your device will be bound to this account It serves as proof of your warranty. Please confirm the account is correct."
            },
            Reseting: {
                "zh-cn": "重置中 ...",
                en: "Reseting ...",
                jp: "リセット中です???",
                it: "重置中 ..."
            },
            ResetSuccess: {
                "zh-cn": "重置成功",
                en: "Reset Success",
                jp: "リセットに成功しました。",
                it: "重置成功"
            },
            resetAll: {
                "zh-cn": "恢复出厂设置",
                en: "Reboot OSMO",
                jp: "OSMOを再起動します。",
                it: "恢复出厂设置"
            },
            LiftFootFrameLock: {
                "zh-cn": "解除脚架锁定",
                en: "Disable Landing Gear Auto Lock",
                jp: "ランディングギア自動ロックを無効にします。",
                it: "解除脚架锁定",
                de: "Automatische Verriegelung des Landegestells deaktivieren",
                fr: "Désactivez le verrouillage automatique du train d'atterrissage",
                ko: "랜딩 기어 자동 잠금 해제"
            },
            sure: {
                "zh-cn": "确定",
                en: "Yes",
                jp: "はい",
                it: "确定",
                de: "Ja",
                fr: "Oui",
                ko: "네"
            },
            resetMsg: {
                "zh-cn": "确定要恢复出厂设置？",
                en: "Restore Factory Defaults?",
                jp: "工場出荷時の初期設定に戻しますか？",
                it: "确定要恢复出厂设置？",
                de: "Auf Werkseinstellungen zurücksetzen?",
                fr: "Restaurer les paramètres usine ?",
                ko: "공장 초기화를 하시겠습니까?"
            },
            upProblemAnswer: {
                "zh-cn": "升级异常处理方法",
                en: "Troubleshooting",
                jp: "トラブルシューティング",
                it: "Troubleshootings"
            },
            upProblem1: {
                "zh-cn": "1. 当出现设备连接异常，系统会自动尝试恢复。",
                en: "1. If a USB Connection Error warning appears, the system will try to resolve it automatically.",
                jp: "1. USB接続エラー警告が表示されたら、システムは自動的に解決を試みます。",
                it: "1. If USB Connection Error warning appears, the system will try to resolve it automatically."
            },
            upProblem2: {
                "zh-cn": "2. 假如等待时间过长，请插拔或更换USB数据线，或尝试不同的USB端口。",
                en: "2. If there is a long delay, unplug and re-insert the USB cable, or try either another USB cable or USB port.",
                jp: "2. 待ち時間が長すぎる場合、再度USBケーブルを抜き差しするか、別のUSBケーブルまたはUSBポイントを使って問題を解決してください。",
                it: "2. If the waiting time is too long, try unplug and plug in the USB cable again, using a different USB cable or USB point to resolve the issue."
            },
            upProblem3: {
                "zh-cn": "3. 如果依然出现问题，请联系DJI技术支持。",
                en: "3. Contact DJI Support if this issue continues after restarting.",
                jp: "3. 再起動後も問題が続く場合は、DJIサポートにお問い合わせください。",
                it: "3. If the problem still occurs, please contact DJI Support."
            },
            upAgain: {
                "zh-cn": "重新升级",
                en: "Update Again",
                jp: "再度アップデートしてください。",
                it: "Upgrade Again"
            },
            actuator_output: {
                "zh-cn": "电机测试转速",
                en: "Motor Test Speed"
            },
            esc_cali: {
                "zh-cn": "电调校准",
                en: "ESC Calibration",
                jp: "ESCキャリブレーション",
                de: "ESC-Kallibrierung",
                fr: "Étalonnage de l'ESC",
                ko: "ESC 캘리브레이션"
            },
            notice_before_esc_cali: {
                "zh-cn": "开始油门行程校准前，请将螺旋桨卸下，以免发生意外。",
                en: "Remove propellers before Throttle Range Calibration.",
                jp: "スロットル範囲のキャリブレーションを実施する前に、プロペラを取り外してください。"
            },
            esc_cali_step1_notice: {
                "zh-cn": "请拔掉电调电源，然后继续。",
                en: "Pull the ESC plug. Then click Next.",
                jp: "ESC プラグを抜きます。そして「次へ」をクリックします。",
                de: "Entfernen Sie den ESC-Stecker Klicken Sie auf Weiter",
                fr: "Débranchez l'ESC. Cliquez sur suivant.",
                ko: "ESC 플러그를 뺀 후, '다음'을 클릭해주십시오."
            },
            esc_cali_step2_notice: {
                "zh-cn": "请插上电源，当听到BB声后，然后继续。",
                en: "Plug in and click Next when hear beeping.",
                jp: "ビープ音が聞こえたら、プラグを差し込み「次へ」をクリックします。",
                de: "Stecken Sie den Stecker ein und drücken Sie Weiter, wenn Sie einen Piepton vernehmen.",
                fr: "Branchez et cliquez sur suivant lorsque vous entendez une sonnerie.",
                ko: "플러그를 끼운 후 삐 소리가 나면 '다음'을 클릭해주십시오."
            },
            esc_cali_step3_notice: {
                "zh-cn": "校准已完成。",
                en: "Calibration Complete.",
                jp: "キャリブレーションが完了しました。"
            },
            finish_esc_cali: {
                "zh-cn": "完成",
                en: "Finish",
                jp: "終了します。",
                de: "Beenden",
                fr: "Terminé",
                ko: "완료"
            },
            "vision-simulator": {
                "zh-cn": "视觉模拟器",
                en: "Vision Simulator Lite",
                jp: "ビジョンシミュレーターライト",
                de: "Optischer Simulator Lite",
                fr: "Vision Simulator Lite",
                ko: "비전 시뮬레이터 라이트"
            },
            "vision-SimulatorLite": {
                "zh-cn": "视觉模拟器 Lite",
                en: "Vision Simulator Lite",
                jp: "ビジョンシミュレーターライト",
                de: "Optischer Simulator Lite",
                fr: "Vision Simulator Lite",
                ko: "비전 시뮬레이터 라이트"
            },
            actuator: {
                "zh-cn": "制动器",
                en: "Brake",
                jp: "アクチュエーター"
            },
            mode_settings: {
                "zh-cn": "模式设置",
                en: "Control Mode",
                jp: "モード設定"
            },
            mode_gentle: {
                "zh-cn": "迟缓",
                en: "Insensitive",
                jp: "穏やか"
            },
            mode_normal: {
                "zh-cn": "中等",
                en: "Middle",
                jp: "標準"
            },
            mode_sport: {
                "zh-cn": "敏捷",
                en: "Sensitive",
                jp: "スポーツ"
            },
            mode_attitude: {
                "zh-cn": "姿态模式",
                en: "Attitude Mode",
                jp: "姿勢"
            },
            mode_manual: {
                "zh-cn": "手动模式",
                en: "Manual Mode",
                jp: "手動"
            },
            upnotice1notsupport: {
                "zh-cn": "注意：不支持升级的版本",
                en: "Note: Max attitude angle",
                jp: "注記：not support",
                it: "Nota: not support.",
                de: "Hinweis: not support",
                es: "Nota: not support.",
                fr: "Remarque : not support",
                nl: "Opmerking: not support.",
                pt: "Nota: not support.",
                ru: "Примечание:not support"
            },
            max_attitude_angle: {
                "zh-cn": "最大姿态角",
                en: "Max Attitude Angle",
                jp: "最大姿勢角"
            },
            max_yaw_rate: {
                "zh-cn": "最大偏航角速度",
                en: "Max Yaw Angular Velocity",
                jp: "最大ヨーレート"
            },
            max_ascent_rate: {
                "zh-cn": "最大上升速度",
                en: "Max Ascent Speed",
                jp: "最大上昇率"
            },
            max_descent_rate: {
                "zh-cn": "最大下降速度",
                en: "Max Descent Speed",
                jp: "最大下降率"
            },
            not_support_upgrade_on_mac: {
                "zh-cn": "MAC版本调参软件暂不支持M100的升级功能，请使用Windows版本升级。",
                en: "The Mac version of DJI Assistant 2 does not support M100 updating. If required, use a Windows computer to update.",
                jp: "MAC版のDJI Assistantは、M100のアップデート機能に対応していません。Windows版を使用してアップデートしてください。"
            },
            upnotice2_patience: {
                "zh-cn": "升级中，请耐心等待。。。",
                en: "Updating. Please wait.",
                jp: "現在アップデート中です。お待ちください。"
            },
            upgrade_selected: {
                "zh-cn": "升级选中的版本",
                en: "Update to the selected version",
                jp: "選択したバージョンをアップデートします。"
            },
            actuator_settings: {
                "zh-cn": "Select Actuator",
                en: "Select Actuator",
                jp: "アクチュエーターを選択します。"
            },
            loginEmailError: {
                "zh-cn": "请输入正确格式的邮箱地址",
                en: "Enter correct email address format",
                jp: "正しいEメールアドレスを入力してください。"
            },
            "esc-list": {
                "zh-cn": "电调列表",
                en: "ESC List"
            },
            esc: {
                "zh-cn": "电调",
                en: "ESCs"
            },
            ChooseFailSafeRcLostActionTime: {
                "zh-cn": "自动降落前悬停",
                en: "Hover before Auto Landing"
            },
            workIntervel: {
                description: "?",
                "zh-cn": "作业间隔",
                en: "Operation Interval"
            },
            workFlySpeed: {
                description: "?",
                "zh-cn": "作业飞行速度",
                en: "Operation Flight Speed"
            },
            mgAppli: {
                "zh-cn": "农业应用",
                en: "Agras Application"
            },
            NULL: {
                "zh-cn": "未设置",
                en: "Unset"
            },
            C1: {
                description: "无须翻译。中英文已定",
                "zh-cn": "C1",
                en: "C1"
            },
            C2: {
                description: "无须翻译。中英文已定",
                "zh-cn": "C2",
                en: "C2"
            },
            A_B: {
                description: "无须翻译。中英文已定",
                "zh-cn": "A_B",
                en: "A_B"
            },
            MANUNAL: {
                description: "无须翻译。中英文已定",
                "zh-cn": "喷洒开关",
                en: "spray"
            },
            WORKMODE: {
                description: "无须翻译。中英文已定",
                "zh-cn": "作业模式",
                en: "farm_mode"
            },
            off_small: {
                "zh-cn": "关",
                en: "OFF"
            },
            on_small: {
                "zh-cn": "开",
                en: "ON"
            },
            channel: {
                "zh-cn": "通道",
                en: "Chanel"
            },
            MovingBandwidth: {
                description: "?",
                "zh-cn": "动力带宽",
                en: "Propulsion System Bandwidth"
            },
            MovingGain: {
                description: "?",
                "zh-cn": "动力感度",
                en: "Propulsion System Sensitivity"
            },
            N3: {
                "zh-cn": "N3",
                en: "N3",
                jp: "N3",
                it: "N3",
                de: "N3",
                es: "N3",
                fr: "N3",
                nl: "N3",
                pt: "N3",
                ru: "N3"
            },
            N3Pro: {
                "zh-cn": "N3 +",
                en: "N3 +",
                jp: "N3 +",
                it: "N3 +",
                de: "N3 +",
                es: "N3 +",
                fr: "N3 +",
                nl: "N3 +",
                pt: "N3 +",
                ru: "N3 +"
            },
            upwarning0: {
                "zh-cn": "本次升级后您的安装坐标数值将恢复至默认值，请重新确认",
                en: "Installation coordinate value has been reset. Confirm?"
            },
            rcConnectRemind: {
                "zh-cn": "请连接遥控器",
                en: "Connect a Remote Controller to use the aircraft."
            },
            upwarning1: {
                "zh-cn": "您的所有参数已被重置，请重新进行设置。",
                en: "All parameters have been back to factory settings. Please reset."
            },
            "tempCalibration-remind1": {
                "zh-cn": "请先拆装螺旋桨",
                en: "Remove Propellers"
            },
            "tempCalibration-remind2": {
                "zh-cn": "保持飞行器电源开启，请勿启动电机",
                en: "Keep the aircraft powered on and do not turn on the motors"
            },
            "tempCalibration-remind3": {
                "zh-cn": "请保持飞行器水平静止不动，在校准过程中请勿移动飞行器，否则请重新校准。该过程大概需要5-10分钟，请耐心等待",
                en: "Ensure that the aircraft is stationary. Do not move the aircraft during calibration, otherwise recalibration will be required.  The whole process takes approximately 10 minutes. Please wait."
            },
            "tempCalibration-remind4": {
                "zh-cn": "请保持飞行器水平静止不动，在校准过程中请勿移动飞行器，否则请重新校准。该过程大概需要5-10分钟，请耐心等待",
                en: "Ensure that aircraft is stationary. Do not move the aircraft during calibration otherwise recalibration may be required.  The whole process takes approximately 10 minutes. Please wait."
            },
            calibrating: {
                "zh-cn": "正在校准，请稍后...",
                en: "Calibrating. Please wait."
            },
            start: {
                "zh-cn": "开始",
                en: "Start"
            },
            "cubeCalibration-remind1": {
                description: "飞控的方向?",
                "zh-cn": "请旋转飞机并保持不动，使飞控的方向跟图示任意一种保持一致",
                en: "Rotate the aircraft and keep it still. Ensure the flight controller direction is consistent with the illustrate."
            },
            "cubeCalibration-remind2": {
                description: "放置方式？",
                "zh-cn": "请调整飞机放置方式继续校准下一个面",
                en: "Adjust the aircraft position then continue"
            },
            calisuccess: {
                "zh-cn": "校准成功!",
                en: "Calibrated."
            },
            califailRemind1: {
                "zh-cn": "IMU校准失败，请重试",
                en: "Failed to calibrate IMU. Retry."
            },
            califailRemind2: {
                "zh-cn": "如失败多次，请联系DJI客服",
                en: "Contact DJI Support if the error persists."
            },
            reCalitration: {
                "zh-cn": "重新校准!",
                en: "Recalibrate"
            },
            quitCalibration: {
                description: "退出啥？",
                "zh-cn": "IMU校准中，现在退出飞行器将无法正常使用，需要重新校准",
                en: "IMU Calibrating. Do not exit"
            },
            zeroOffset: {
                "zh-cn": "零偏",
                en: "Bias"
            },
            MC: {
                "zh-cn": "MC",
                en: "MC"
            },
            flightdataAbout: {
                description: "?log还是record",
                "zh-cn": "欢迎使用飞行数据。",
                en: "Welcome to Flight Data"
            },
            WaterPump: {
                "zh-cn": "水泵",
                en: "Water Pump"
            },
            GPSgentle: {
                "zh-cn": "GPSgentle",
                en: "GPSgentle",
                jp: "GPSgentle",
                it: "GPSgentle",
                de: "GPSgentle",
                es: "GPSgentle",
                fr: "GPSgentle",
                nl: "GPSgentle",
                pt: "GPSgentle",
                ru: "GPSgentle"
            },
            Moticonfig: {
                "zh-cn": "动力配置",
                en: "Propulsion Configuration"
            },
            singleSideCalibration: {
                "zh-cn": "更快速的单面体校准",
                en: "Fast Monohedron Calibration"
            },
            multiSideCalibration: {
                "zh-cn": "更精准的多面体校准",
                en: "Accurate Polyhedron Calibration"
            },
            "setupCalibration-remind": {
                "zh-cn": "您可以选择每个面都朝正下方一次以获取更高精确度，或者考虑到可操作性只选择任意5个面",
                en: "Select Polyhedron Calibration to calibrate each side of aircraft for more accuracy, or Monohedron Calibration to calibrate any one side for more convenience."
            },
            interference: {
                "zh-cn": "干扰量",
                en: "interference"
            },
            rcWifiSSID: {
                "zh-cn": "SSID",
                en: "SSID",
                jp: "SSID",
                de: "SSID",
                fr: "SSID",
                ko: "SSID"
            },
            rcWifiSetSSID: {
                "zh-cn": "设置SSID",
                en: "Set SSID",
                jp: "SSIDを設定します。",
                de: "SSID festlegen",
                fr: "Saisissez un SSID",
                ko: "SSID 설정"
            },
            rcWifiPassword: {
                "zh-cn": "密码",
                en: "Password",
                jp: "パスワード",
                de: "Passwort",
                fr: "Mot de passe :",
                ko: "비밀번호"
            },
            rcWifiSetPassword: {
                "zh-cn": "设置密码",
                en: "Set Password",
                jp: "パスワードを設定します。",
                de: "Passwort festlegen",
                fr: "Saisir un mot de passe",
                ko: "비밀번호 설정"
            },
            setSSIDMsg1001: {
                "zh-cn": "SSID设置成功",
                en: "SSID Set"
            },
            setSSIDMsg2001: {
                "zh-cn": "SSID录入长度不能超过32个字符",
                en: "SSID must be between 8 and 63 characters"
            },
            setSSIDMsg2002: {
                "zh-cn": "SSID录入字符只能是字母、数字、-、_",
                en: "Only letters, numbers, - and _ are accepted"
            },
            setSSIDMsg2003: {
                "zh-cn": "SSID设置失败",
                en: "Failed to set SSID"
            },
            setPasswordMsg1001: {
                "zh-cn": "密码设置成功",
                en: "Password Set"
            },
            setPasswordMsg2001: {
                "zh-cn": "密码录入长度范围须在8~63个字符",
                en: "SSID must be between 8 and 63 characters"
            },
            setPasswordMsg2002: {
                "zh-cn": "密码录入字符只能是字母、数字、-、_、@",
                en: "Only letters, numbers, -, _, and @ are accepted",
                de: "Nur Buchstab, Zahlen, sowie -,_ und @ werden akzeptiert",
                fr: "Seuls les lettres, les chiffres, -, _ et @ sont acceptés",
                ko: "영문자, 숫자, 특수문자 중 - , _ , @ 만 사용하여 설정할 수 있습니다."
            },
            setPasswordMsg2003: {
                "zh-cn": "密码设置失败",
                en: "Failed to Set",
                de: "Fehlgeschlagen",
                fr: "Échec du réglage",
                ko: "설정 실패"
            },
            SdkLost: {
                "zh-cn": "SDK失控策略",
                en: "SDK Failsafe Action"
            },
            SdkLostEnable: {
                "zh-cn": "遥控失控不切SDK",
                en: "Enable SDK Failsafe Action"
            },
            liscence: {
                description: "增值服务：左侧导航和顶部导航文案",
                "zh-cn": "许可证",
                en: "License Key"
            },
            DataShow: {
                "zh-cn": "调试数据展示",
                en: "调试数据展示"
            },
            HolderDebug: {
                "zh-cn": "云台调试信息",
                en: "云台调试信息"
            },
            noAction: {
                "zh-cn": "无动作",
                en: "No Action"
            },
            SdkLostConfig: {
                "zh-cn": "SDK失控策略配置",
                en: "SDK Failsafe Action Settings"
            },
            AdvancedGain: {
                "zh-cn": "高级感度",
                en: "Advanced Gain"
            },
            tipchooseairframe: {
                "zh-cn": "* 共桨双轴类型，“蓝色箭头”代表上层螺旋桨，“红色箭头”代表下层螺旋桨",
                en: "* Co-Axis Dual-Prop Type. Blue arrows refers to the upper propellers while red refers to the lower ones."
            },
            BasicsChannels: {
                "zh-cn": "基础通道",
                en: "Basic Channel"
            },
            AdvancedChannels: {
                "zh-cn": "高级通道",
                en: "Advanced Channel"
            },
            KnobChannels: {
                "zh-cn": "Knob 通道",
                en: "Knob Channel"
            },
            DirectChannels: {
                "zh-cn": "Direct 通道",
                en: "Direct Channel"
            },
            MGChannels: {
                "zh-cn": "农机通道",
                en: "MG-1S Channel"
            },
            tipsesc3: {
                "zh-cn": "电调校准功能要求飞控和电调供电分离",
                en: "Power supply for flight controller and ESC should be separated based on ESC calibration requirements"
            },
            Modify: {
                "zh-cn": "修改",
                en: "Modify"
            },
            gps_setting: {
                "zh-cn": "GPS设置",
                en: "GPS Settings"
            },
            gps_date: {
                "zh-cn": "GPS日期",
                en: "GPS Date"
            },
            fly_limit_switch: {
                "zh-cn": "限飞开关",
                en: "Flight Restriction Switch"
            },
            Iocswitch: {
                description: "无须翻译。",
                "zh-cn": "智能航向开关",
                en: "IOC Switch"
            },
            export_data: {
                "zh-cn": "黑匣子数据",
                en: "Black Box"
            },
            export_ing: {
                "zh-cn": "导出中",
                en: "Exporting"
            },
            export_success: {
                "zh-cn": "导出成功",
                en: "Export Complete"
            },
            export_failed: {
                "zh-cn": "导出失败",
                en: "Export Failed"
            },
            accelerometerwrong: {
                "zh-cn": "校准失败，设备异常",
                en: "Calibration Failed. Device Error."
            },
            gyrowrong: {
                "zh-cn": "陀螺仪故障",
                en: "Gyroscope Error"
            },
            accelerometerScaleWrong: {
                "zh-cn": "校准失败，结果异常",
                en: "Calibration Failed. Result Error."
            },
            accelerometerBiasWrong: {
                "zh-cn": "加速度的scale异常",
                en: "Accelerometer Scale Error"
            },
            samplingTypeWrong: {
                "zh-cn": "校准失败，配置异常",
                en: "Calibration Failed. Settings Error."
            },
            fittingWrong: {
                "zh-cn": "拟合误差大",
                en: "Large Estimation Error"
            },
            gyroBiasWrong: {
                "zh-cn": "陀螺仪bias异常",
                en: "Gyroscope Bias Error"
            },
            samplingTimout: {
                "zh-cn": "校准失败，采样超时",
                en: "Calibration Failed. Sampling Error."
            },
            imuerrorcode: {
                "zh-cn": "组陀螺仪和加速度计校准失败",
                en: "Failed to calibrate gyroscope and accelerometer."
            },
            "tempCalibration-remind5": {
                "zh-cn": "在校准的过程中，请保持主控和外置IMU方向相同的固定在同一个平面上。",
                en: "Ensure the main controller and external IMU are fixed at a same surface in the same direction during calibration."
            },
            export_data_to_local: {
                "zh-cn": "导出到本地",
                en: "Save to local"
            },
            export_data_info_aircraft: {
                "zh-cn": "飞行器历史数据",
                en: "Flight log"
            },
            export_data_info_rc: {
                "zh-cn": "遥控器历史数据",
                en: "RC log"
            },
            emergency: {
                description: "遥控器高级通道的名字",
                "zh-cn": "紧急退出",
                en: "Emergency Break"
            },
            pause_stop: {
                description: "遥控器高级通道的名字",
                "zh-cn": "暂停键",
                en: "pause_stop"
            },
            Propulsion: {
                "zh-cn": "动力带宽",
                en: "Propulsion"
            },
            FChannelShort: {
                "zh-cn": "功能通道",
                en: "F Channels"
            },
            radar: {
                description: "农机雷达：雷达页面标题",
                "zh-cn": "雷达",
                en: "Radar"
            },
            radarTest: {
                description: "农机雷达：雷达测试页面标题",
                "zh-cn": "雷达测试功能",
                en: "雷达测试功能"
            },
            whirlingBlade: {
                description: "农机：飞行设置-安全设置。 解释：例如折叠桨或者自紧桨，在电机启动的时候急加速几下，使桨展开或旋紧；",
                "zh-cn": "甩桨动作",
                en: "Propeller Action"
            },
            RCDeadArea: {
                description: "农机：基本设置-遥控器。解释：就是遥控器上的两个摇杆，在中间位置定义一个正负范围，例如正常范围是-180--0--+180这个区间活动，因为这个“0”点不好控制，所以假设在-10--0--+10这个范围都认为是“0”点，叫做死区",
                "zh-cn": "遥控器死区",
                en: "Remote Controller Dead Zone"
            },
            use_screen_calibration: {
                "zh-cn": "标定板已丢失或损坏？",
                en: "Calibration board missing or damaged?"
            },
            use_board_calibration: {
                "zh-cn": "重新使用标定板",
                en: "Reuse calibration board."
            },
            write: {
                description: "农机雷达：雷达页面",
                "zh-cn": "写入",
                en: "Write"
            },
            hardwareId: {
                description: "农机雷达：雷达页面",
                "zh-cn": "硬件ID",
                en: "Hardware ID"
            },
            hardwareInfo: {
                description: "农机雷达：雷达页面",
                "zh-cn": "硬件信息",
                en: "Hardware Info"
            },
            radartype: {
                description: "农机雷达：雷达页面",
                "zh-cn": "雷达类型",
                en: "Radar Type"
            },
            altituderadar: {
                description: "农机雷达：雷达页面",
                "zh-cn": "测高雷达",
                en: "Altitude Radar"
            },
            predictradar0: {
                description: "农机雷达：雷达页面",
                "zh-cn": "前预测雷达",
                en: "Front Prediction Radar"
            },
            predictradar1: {
                description: "农机雷达：雷达页面",
                "zh-cn": "后预测雷达",
                en: "Back Prediction Radar"
            },
            radarenable: {
                description: "农机雷达：雷达测试页面",
                "zh-cn": "雷达使能",
                en: "雷达使能"
            },
            launchenable: {
                description: "农机雷达：雷达测试页面",
                "zh-cn": "发射使能",
                en: "发射使能"
            },
            rfgain: {
                description: "农机雷达：雷达测试页面",
                "zh-cn": "射频增益",
                en: "射频增益"
            },
            ifgain: {
                description: "农机雷达：雷达测试页面",
                "zh-cn": "中频增益",
                en: "中频增益"
            },
            lockringcfg: {
                description: "农机雷达：雷达测试页面",
                "zh-cn": "锁相环配置",
                en: "Frequency synthesizer configuration"
            },
            dp: {
                description: "农机雷达：雷达测试页面",
                "zh-cn": "动态规划",
                en: "动态规划"
            },
            softwareversion: {
                description: "农机雷达：雷达测试页面",
                "zh-cn": "软件版本号",
                en: "软件版本号"
            },
            query: {
                description: "农机雷达：雷达测试页面",
                "zh-cn": "查询",
                en: "查询"
            },
            enableRadar: {
                description: "农机雷达：整机在雷达页面，农机固件在飞行设置-农业应用页面",
                "zh-cn": "开启雷达",
                en: "Enable Radar"
            },
            upload_log: {
                description: "升级页：正在上传的异常LOG文件",
                "zh-cn": "上传错误日志",
                en: "Upload Error Log"
            },
            upload_log_ing: {
                description: "升级页：正在上传的异常LOG文件",
                "zh-cn": "上传中",
                en: "Uploading"
            },
            upload_log_success: {
                description: "升级页：上传的异常LOG文件成功",
                "zh-cn": "上传成功",
                en: "Uploaded"
            },
            upload_log_failed: {
                description: "升级页：上传的异常LOG文件失败",
                "zh-cn": "上传失败",
                en: "Failed to upload."
            },
            SET_A: {
                description: "暂不翻译。农机暂时未开放的通道名。",
                "zh-cn": "SET_A",
                en: "SET_A"
            },
            SET_B: {
                description: "暂不翻译。农机暂时未开放的通道名。",
                "zh-cn": "SET_B",
                en: "SET_B"
            },
            FLOWSPEED: {
                description: "无须翻译。中英文已定",
                "zh-cn": "喷洒流量",
                en: "flow_speed"
            },
            not_show_calibration_teach: {
                "zh-cn": "不再提醒标定步骤",
                en: "Do not show calibration steps again."
            },
            PreStep: {
                "zh-cn": "上一步",
                en: "Previous"
            },
            Transmiting: {
                "zh-cn": "传输中",
                en: "Transmitting"
            },
            Transmit: {
                "zh-cn": "传输",
                en: "Transmission"
            },
            result: {
                "zh-cn": "结果",
                en: "Result"
            },
            upload_select_info: {
                "zh-cn": "点击“添加文件”按钮，选择本地数据文件",
                en: "Click Add File button to choose local data files."
            },
            upload_to_svr: {
                "zh-cn": "上报飞行数据",
                en: "Report flight data"
            },
            add_upload_file: {
                "zh-cn": "添加文件",
                en: "Add File"
            },
            upload_cer_failed1: {
                "zh-cn": "获取飞行器信息失败，请重启飞行器后重试",
                en: "Failed to get aircraft information. Restart aircraft and retry."
            },
            upload_cer_failed2: {
                "zh-cn": "获取服务器信息失败，请重试",
                en: "Failed to get server information. Please retry."
            },
            fl_perinfo_desc: {
                "zh-cn": "详细的案例信息能让我们更快的帮助您解决问题",
                en: "Fill in the case information to better solving your issue."
            },
            fl_name: {
                "zh-cn": "姓名",
                en: "Name"
            },
            fl_mail: {
                "zh-cn": "邮箱",
                en: "Email"
            },
            fl_mobile_phone: {
                "zh-cn": "手机",
                en: "Mobile Phone"
            },
            fl_accident_date: {
                "zh-cn": "故障时间",
                en: "Incident Time"
            },
            fl_accident_desc: {
                "zh-cn": "故障描述",
                en: "Incident Description"
            },
            fl_case_num: {
                "zh-cn": "CASE号（选填）",
                en: "Case No. (Optional)"
            },
            fl_submit: {
                "zh-cn": "提交",
                en: "Submit"
            },
            fl_set_perinfo_ing: {
                "zh-cn": "提交中...",
                en: "Submitting..."
            },
            fl_set_perinfo_success: {
                "zh-cn": "提交成功，即将开始文件上传",
                en: "Information Submitted. Uploading flight logs."
            },
            fl_set_perinfo_failed: {
                "zh-cn": "服务器异常，请重试",
                en: "Server Error. Retry submitting."
            },
            fl_set_perinfo_param_error: {
                "zh-cn": "录入数据不合法",
                en: "Invalid Data."
            },
            debugparams: {
                "zh-cn": "Debug Params",
                en: "Debug Params"
            },
            fly_sim_pos_switch: {
                description: "内部使用，无须翻译",
                "zh-cn": "限飞位置信息可用",
                en: "FL_SIM_POS_EN"
            },
            fly_limit_take_off_switch: {
                description: "内部使用，无须翻译",
                "zh-cn": "限飞区飞行模式",
                en: "FL_LIMIT_TAKE_OFF_EN"
            },
            getPasswordMsg2001: {
                "zh-cn": "获取密码失败",
                en: "Failed to get password."
            },
            getSSIDMsg2001: {
                "zh-cn": "获取SSID失败",
                en: "Failed to get SSID."
            },
            no_more_prompt: {
                "zh-cn": "不再提示",
                en: "Do not show again"
            },
            F_CHL_SHUTTER_ACTIVE_OUTPUT: {
                "zh-cn": "快门PWM触发脉宽",
                en: "Shutter Trigger PWM"
            },
            F_CHL_SHUTTER_DEFAULT_OUTPUT: {
                "zh-cn": "快门PWM默认脉宽",
                en: "Shutter Default PWM"
            },
            F_CHL_SHUTTER_FREQ: {
                "zh-cn": "快门PWM频率",
                en: "Shutter PWM Frequency"
            },
            F_CHL_SHUTTER_MS: {
                "zh-cn": "快门PWM激发态保持时间",
                en: "Shutter PWM Active"
            },
            shutter: {
                "zh-cn": "快门",
                en: "Shutter"
            },
            spray: {
                "zh-cn": "喷洒",
                en: "Spraying"
            },
            F_CHL_FARM_WIDTH: {
                "zh-cn": "喷洒脉宽",
                en: "Spraying PWM"
            },
            F_CHL_FARM_FREQ: {
                "zh-cn": "喷洒频率",
                en: "Spraying Frequency"
            },
            F_CHL_Dx_WIDTH: {
                "zh-cn": "直通通道脉宽",
                en: "Spraying Frequency"
            },
            F_CHL_D_FREQ: {
                "zh-cn": "直通通道频率",
                en: "Direct Output Channel Frequency"
            },
            travel_negation: {
                "zh-cn": "通道开关反向设置",
                en: "Channel Switch Reverse Settings"
            },
            "SimulatorNotice2-mg": {
                "zh-cn": "• 请务必在结束使用此模拟器后在DJI MG App中检查并还原您的飞行设置。",
                en: "• Check and restore your flight settings in the DJI MG app after using the simulator."
            },
            CAMERA: {
                description: "遥控器高级通道的名字",
                "zh-cn": "快门",
                en: "Shutter"
            },
            open_flightlog_dir: {
                "zh-cn": "查看飞行数据",
                en: "Check Flight Data"
            },
            data_upload: {
                "zh-cn": "数据上传",
                en: "Data Upload"
            },
            upload_data_list: {
                "zh-cn": "上传数据列表",
                en: "Data Upload List"
            },
            data_file: {
                "zh-cn": "数据文件",
                en: "Data File"
            },
            upload_data_file: {
                "zh-cn": "上报数据文件",
                en: "Report Data File"
            },
            upload_data_remind1: {
                "zh-cn": "本功能可将您DJI设备中存储的设备信息和飞行数据（请参见您的DJI设备的最新用户手册）上传至DJI服务器。通过选择上传数据，您同意DJI读取、使用前述数据。",
                en: "On this page, you may upload device information and flight data (for more information, please refer to the most recent version of your DJI device's user manual) stored on your DJI device to DJI server. By uploading data to DJI server, you agree to authorize DJI to access and use such data."
            },
            upload_data_remind2: {
                "zh-cn": "进入数据上传页面会切换设备状态，可能会导致部分功能暂时失效，重启设备可恢复。",
                en: "Going to the Data Upload page will change the DJI device status. This may lead to the unavailability of some functions. Restart the device to restore."
            },
            enterFlightLogConfirm2: {
                "zh-cn": "进入飞行数据页面，飞行数据将以SD卡的形式出现在电脑中。部分功能可能暂时失效，重启设备可恢复。",
                en: "Enter the Flight Record page. Click the SD Card icon to view flight records. Some functions may be temporarily unavailable. Restart aircraft to restore."
            },
            white: {
                "zh-cn": "白名单",
                en: "White Sheet"
            },
            whether_to_ban: {
                "zh-cn": "是否解禁",
                en: "Unlock?"
            },
            ban_dead_line: {
                "zh-cn": "解禁到期时间",
                en: "Unlock Expiration Time"
            },
            yes: {
                "zh-cn": "是",
                en: "Yes"
            },
            no: {
                "zh-cn": "否",
                en: "No"
            },
            save: {
                "zh-cn": "保存",
                en: "Save"
            },
            white_error_msg_0: {
                "zh-cn": "操作成功",
                en: "Operation Success"
            },
            white_error_msg_10: {
                "zh-cn": "写固件失败",
                en: "Failed to write into firmware"
            },
            white_error_msg_20: {
                "zh-cn": "网络异常",
                en: "Network Error"
            },
            white_error_msg_21: {
                "zh-cn": "当前用户没有认证",
                en: "Not Veified"
            },
            white_error_msg_22: {
                "zh-cn": "服务器异常",
                en: "Server Error"
            },
            flightdataDesc1: {
                "zh-cn": "DataViewer主要用于查看、分析无人机的飞行数据文件，以实现无人机的性能分析与故障诊断。无人机飞行数据将以SD卡的形式出现在资源管理器中。",
                en: "DataViewer is mainly used for checking and analyzing flight data of aircraft, so that to obtain aircraft performance analysis and incident diagnosis. Aircraft flight data will be found in SD card in Resource Manager."
            },
            flightdataDesc2: {
                "zh-cn": "DataViewer主要用于查看、分析无人机的飞行数据文件，以实现无人机的性能分析与故障诊断。无人机飞行数据将以SD卡的形式出现在资源管理器中。进入“SD卡模式”之后，部分功能将被禁用，重启可恢复。",
                en: "DataViewer is mainly used for checking and analyzing flight data of aircraft, so that to obtain aircraft performance analysis and incident diagnosis. Aircraft flight data will be found in SD card in Resource Manager. In SD Card mode, some functions may be disabled. Restart the aircraft to recover."
            },
            upwarning2: {
                "zh-cn": "手动重启主控后再飞行。",
                en: "Manually restart main controller before flight."
            },
            recover_success: {
                "zh-cn": "恢复成功",
                en: "Backup Settings Restored"
            },
            recover_ing: {
                "zh-cn": "恢复中",
                en: "Backup Settings Restoring"
            },
            recover_error10: {
                "zh-cn": "恢复失败，版本不匹配",
                en: "Failed to restore backup settings. Version not matched."
            },
            recover_error11: {
                "zh-cn": "恢复失败，设备信息不匹配",
                en: "Failed to restore backup settings. Device info not matched."
            },
            recover_error12: {
                "zh-cn": "恢复失败，备份参数表信息不全",
                en: "Failed to restore backup settings. Backup settings not complete."
            },
            recover_error13: {
                "zh-cn": "部分参数恢复失败，为保证飞行安全，设备已恢复为出厂设置。",
                en: "Failed to restore some of Backup settings. Restore to factory settings to ensure flight safety."
            },
            activatetit_mg: {
                "zh-cn": "激活您的设备",
                en: "Activate your DJI device"
            },
            activatedesc_mg: {
                "zh-cn": "首次使用该产品时，需要对产品进行激活，请使用MG-1S APP进行激活。",
                en: "Activate device before first use. Please use DJI MG-1S APP to activate."
            },
            topolopy_station_id: {
                "zh-cn": "测试站编号",
                en: "测试站编号"
            },
            topolopy_station_name: {
                "zh-cn": "测试站名片",
                en: "测试站名片"
            },
            topolopy_test_site: {
                "zh-cn": "测试地点",
                en: "测试地点"
            },
            topolopy_op_id: {
                "zh-cn": "操作员 Id",
                en: "Operator ID"
            },
            topolopy_part_number: {
                "zh-cn": "工程名",
                en: "Project Name"
            },
            topolopy_phase: {
                "zh-cn": "项目阶段",
                en: "Progress"
            },
            topolopy_opt_type: {
                "zh-cn": "操作类型",
                en: "Operation Type"
            },
            topolopy_local_path: {
                "zh-cn": "存储路径",
                en: "Save Path"
            },
            topolopy_opt_type_desc0: {
                "zh-cn": "不保存",
                en: "Do not save"
            },
            topolopy_opt_type_desc1: {
                "zh-cn": "上报到服务器",
                en: "Report to server"
            },
            topolopy_opt_type_desc2: {
                "zh-cn": "保存到本地",
                en: "Save as local data"
            },
            topolopy_upload_log_title: {
                "zh-cn": "设置上报信息",
                en: "Set report"
            },
            topolopy_set_report_cfg_ing: {
                "zh-cn": "设置中",
                en: "Settings configuring"
            },
            topolopy_set_report_cfg_success: {
                "zh-cn": "设置成功",
                en: "Settings successfully configured"
            },
            topolopy_set_report_cfg_failed: {
                "zh-cn": "设置失败",
                en: "Settings configuration failed"
            },
            topolopy_set_report_cfg_param_error: {
                "zh-cn": "参数错误",
                en: "Invalid Parameters"
            },
            show_report_cfg_pop: {
                "zh-cn": "设置LOG上传信息",
                en: "Set LOG to upload information"
            },
            battery_sim: {
                "zh-cn": "电池仿真",
                en: "Simulate Battery"
            },
            craft_size: {
                "zh-cn": "飞行器轴距",
                en: "Aircraft Wheelbase"
            },
            basicinfo: {
                "zh-cn": "基础信息",
                en: "Basic Info"
            },
            imu_desc0: {
                "zh-cn": "第0组陀螺仪和加速度计",
                en: "Group 0 Gyroscopes and accelerometers"
            },
            imu_desc1: {
                "zh-cn": "第1组陀螺仪和加速度计",
                en: "Group 1 Gyroscopes and accelerometers"
            },
            imu_desc2: {
                "zh-cn": "第2组陀螺仪和加速度计",
                en: "Group 2 Gyroscopes and accelerometers"
            },
            mobile_phone: {
                "zh-cn": "手机号",
                en: "Telephone Number"
            },
            mobile_phone_desc: {
                "zh-cn": "请输入中国大陆地区手机号码",
                en: "Enter a Mainland China telephone number"
            },
            verif_code: {
                "zh-cn": "验证码",
                en: "Verification Code"
            },
            send_code: {
                "zh-cn": "发送验证码",
                en: "Send Verification Code"
            },
            resend_code: {
                "zh-cn": "重发验证码",
                en: "Resend Verification Code"
            },
            send_code_ing: {
                "zh-cn": "发送中",
                en: "Sending"
            },
            activatedesc3: {
                "zh-cn": "飞行器的信息将与您的账号和手机号码绑定，作为维修及售后服务的依据，请确认邮箱地址和手机号码正确。",
                en: "Information regarding your DJI aircraft will be bound to your account for repair and warranty purposes. Confirm that email address and telephone number are correct."
            },
            activatedesc3_1: {
                "zh-cn": "官网个人中心",
                en: "https://accounts.dji.com/user"
            },
            NEED_UPGRADE_SQL: {
                "zh-cn": "您的限飞数据库须要升级！",
                en: "Updating No-fly Zone Database is required."
            },
            noticeUpgradeSQLConfirm: {
                "zh-cn": "限飞数据库须要更新，现在是否升级？",
                en: "Updating No-fly Zone Database is required. Update now?"
            },
            show_upgrade_sql_btn: {
                "zh-cn": "更新数据库",
                en: "Update Database"
            },
            mobilebind_status10: {
                "zh-cn": "网络异常",
                en: "Network Error"
            },
            mobilebind_status11: {
                "zh-cn": "获取设备信息失败",
                en: "Device Info"
            },
            active_code_status10: {
                "zh-cn": "网络异常",
                en: "Network Error"
            },
            active_code_status11: {
                "zh-cn": "获取设备信息失败",
                en: "Failed to get device Info"
            },
            active_code_status12: {
                "zh-cn": "手机号不能为空",
                en: "Telephone Number section cannot be empty."
            },
            active_code_status13: {
                "zh-cn": "手机号不合法",
                en: "Invalid Telephone Number"
            },
            active_code_status14: {
                "zh-cn": "验证码不能为空",
                en: "Verification Code section cannot be empty."
            },
            active_code_status15: {
                "zh-cn": "验证码错误",
                en: "Verification Code Error"
            },
            active_code_status16: {
                "zh-cn": "验证码过期",
                en: "Failed to get device info"
            },
            send_code_status10: {
                "zh-cn": "网络异常",
                en: "Network Error"
            },
            send_code_status11: {
                "zh-cn": "获取设备信息失败",
                en: "Failed to get device info"
            },
            send_code_status12: {
                "zh-cn": "手机号不能为空",
                en: "section cannot be empty."
            },
            send_code_status13: {
                "zh-cn": "手机号不合法",
                en: "Invalid telephone number"
            },
            send_code_status14: {
                "zh-cn": "手机号不是中国地区手机号",
                en: "Enter a Mainland China telephone number"
            },
            send_code_status15: {
                "zh-cn": "服务器异常",
                en: "Server Error"
            },
            send_code_status16: {
                "zh-cn": "发送太频繁，稍后重试",
                en: "The number of sending attempts exceeds the limit. Try again later."
            },
            ignore: {
                "zh-cn": "忽略",
                en: "Ignore"
            },
            lowpass_desc0: {
                "zh-cn": "震动抑制",
                en: "Shake Suppression"
            },
            lowpass_desc1: {
                "zh-cn": "控制鲁棒性",
                en: "Control Robustness"
            },
            lowpass_title: {
                "zh-cn": "控制性能参数",
                en: "Control Performance Parameters"
            },
            activatesuccess2: {
                "zh-cn": "激活成功，绑定手机号失败。为配合飞行安全监管，请连接DJI GO 4(根据机型判断)绑定手机号。",
                en: "Activation Success. Failed to bind telephone number. To make flight safety supervision more effective, connect DJI GO 4 (based on your aircraft type) to bind your telephone."
            },
            activatesuccess3: {
                "zh-cn": "激活成功，绑定手机号失败。为配合飞行安全监管，请连接DJI GO(根据机型判断)绑定手机号。",
                en: "Activation Success. Failed to bind telephone number. To make flight safety supervision more effective, connect DJI GO (based on your aircraft type) to bind your telephone."
            },
            changePhone: {
                "zh-cn": "更换手机"
            },
            wifiset_errcode_1011: {
                "zh-cn": "获取参数失败",
                en: "Failed to read data."
            },
            wifiset_errcode_1020: {
                "zh-cn": "SSID设置成功",
                en: "SSID set successful"
            },
            wifiset_errcode_1021: {
                "zh-cn": "SSID录入长度不能超过32个字符",
                en: "Cannot input an SSID exceeding 32 characters"
            },
            wifiset_errcode_1022: {
                "zh-cn": "SSID录入字符只能是字母、数字、-、_",
                en: "Only letters, numbers, - and _ are accepted"
            },
            wifiset_errcode_1023: {
                "zh-cn": "SSID设置失败",
                en: "Set SSID failed."
            },
            wifiset_errcode_1029: {
                "zh-cn": "设置中",
                en: "Setting..."
            },
            wifiset_errcode_1040: {
                "zh-cn": "密码设置成功",
                en: "Password setting successful"
            },
            wifiset_errcode_1041: {
                "zh-cn": "密码录入长度范围须在8~63个字符",
                en: "SSID must be between 8 and 63 characters"
            },
            wifiset_errcode_1042: {
                "zh-cn": "密码录入字符只能是字母、数字、-、_、@",
                en: "Only letters, numbers, -, _, and @ are accepted"
            },
            wifiset_errcode_1043: {
                "zh-cn": "密码设置失败",
                en: "Failed to Set"
            },
            wifiset_errcode_1049: {
                "zh-cn": "设置中",
                en: "Setting..."
            },
            gps_time: {
                "zh-cn": "GPS时间",
                en: "GPS Time"
            },
            verif_code_status17: {
                "zh-cn": "绑定手机号失败",
                en: "Link phone number failed."
            },
            loginPasswordEmpty: {
                "zh-cn": "密码不能为空",
                en: "Password cannot be empty"
            },
            loginVerifCodeEmpty: {
                "zh-cn": "验证码不能为空",
                en: "Verification code cannot be empty."
            },
            loginneterror: {
                "zh-cn": "网络异常",
                en: "Network Error"
            },
            loginemailerror: {
                "zh-cn": "用户名不存在",
                en: "User Name Not Exist"
            },
            loginepassworderror: {
                "zh-cn": "密码错误",
                en: "Password Error"
            },
            loginverifcodeerror: {
                "zh-cn": "验证码错误",
                en: "Verification Code Error"
            },
            loginaccounterror: {
                "zh-cn": "请输入正确格式的账号地址",
                en: "Please enter a correctly formatted email address."
            },
            loginaccount: {
                "zh-cn": "账号",
                en: "Account"
            },
            startactivation_status9: {
                "zh-cn": "服务器异常，重新登录账户后重试",
                en: "Server Error. Sign in again and retry."
            },
            startactivation_status10: {
                "zh-cn": "网络异常",
                en: "Network Error"
            },
            startactivation_status11: {
                "zh-cn": "获取设备信息失败",
                en: "Device Info"
            },
            upnotice9: {
                "zh-cn": "确保卸掉旋翼",
                en: "Ensure that propellers have been removed."
            },
            emergency_shut_down: {
                "zh-cn": "紧急停机功能",
                en: "Stop Motor "
            },
            start_mode: {
                "zh-cn": "启动方式",
                en: "Start Method "
            },
            normal_start_mode: {
                "zh-cn": "正常启动",
                en: "Normal Start"
            },
            one_by_one_mode: {
                "zh-cn": "逐个启动",
                en: "Successive Start"
            },
            login_account_freezed: {
                "zh-cn": "账号已经被冻结",
                en: "Your account has been frozen.This account has been frozen."
            },
            hardware_sync: {
                "zh-cn": "硬件同步",
                en: "Hardware Sync"
            },
            esc_led: {
                "zh-cn": "指示灯",
                en: "Active Braking"
            },
            upnotice10: {
                "zh-cn": "升级后，不连接APP或未登录APP飞行将会被限高30m，限远50m，请确认此改动后再开始升级固件。",
                en: "After this update, your flight altitude and distance will be limited to 30 m and 50 m, respectively, if you start flying without first connecting to a DJI-compatible app and logging into your DJI account."
            },
            upnotice11: {
                "zh-cn": "升级后，如果您不满意本次升级的功能，可以使用调参软件回退固件。",
                en: "If you are not satisfied with this update, you can revert to older firmware using DJI Assistant 2."
            },
            upnotice12: {
                "zh-cn": "固件升级提示",
                en: "Notice of Firmware Update"
            },
            wifi_aircraft: {
                "zh-cn": "飞行器",
                en: "Aircraft"
            },
            altitude_of_take_off: {
                "zh-cn": "起飞海拔",
                en: "Takeoff Altitude"
            },
            other_params: {
                "zh-cn": "其他参数",
                en: "Other Settings"
            },
            upnotice13: {
                "zh-cn": "升级前请先将Z30\\XT相机云台固件升级至最新版本",
                en: "Please update your Zenmuse Z30/XT. "
            },
            system_error: {
                "zh-cn": "系统异常，请稍后重试",
                en: "System error. Please try again later."
            },
            active_code_status2: {
                "zh-cn": "绑定成功",
                en: "Binding Successful"
            },
            p4_up_net_error: {
                "zh-cn": "网络异常",
                en: "Network Error"
            },
            obstacle_avoidance_radar: {
                "zh-cn": "避障雷达",
                en: "Obstacle Avoidance Radar"
            },
            radar_holder: {
                "zh-cn": "雷达云台",
                en: "Radar Gimbal"
            },
            backup_success: {
                "zh-cn": "备份成功",
                en: "Backup Successful"
            },
            backup_ing: {
                "zh-cn": "备份中",
                en: "Backup  in progress…"
            },
            backup_error40: {
                "zh-cn": "备份失败",
                en: "Backup Failed"
            },
            recover_error38: {
                "zh-cn": "恢复失败，读取文件异常",
                en: "Local file loading error. Recovery failed. "
            },
            recover_error39: {
                "zh-cn": "恢复失败，解析文件异常",
                en: "Local file analysis error. Recovery failed. "
            },
            failed_to_enter_debug_mode: {
                "zh-cn": "进入DEBUG模式失败",
                en: "Enter DEBUG mode failed."
            },
            selectall: {
                "zh-cn": "全选",
                en: "Select All",
                it: "Seleziona tutto",
                de: "Alle auswählen",
                es: "Seleccionar todo",
                fr: "Tout sélectionner",
                nl: "Alles selecteren",
                pt: "Selecionar tudo",
                ru: "Выбрать все"
            },
            tipsmounting2: {
                "zh-cn": "请填写模块安装方向，以及模块安装位置相对于机架重心的偏移量数值。",
                en: "Fill in the values of offset to the center of the mass of the aircraft and the direction of the installation.",
                jp: "機体の質量の中心に対する補正値と取付け方向を入力してください。",
                it: "Compilare i valori di offset rispetto al centro della massa del velivolo e alla direzione dell'installazione.",
                de: "Die Werte für den Versatz zum Massezentrum der Drohne und die Einbaurichtung eingeben.",
                es: "Introduzca los valores de desplazamiento respecto del centro de masas de la aeronave y la dirección de la instalación.",
                fr: "Renseignez les valeurs de décalage du centre de masse de l'appareil, ainsi que le sens d'installation.",
                nl: "Vul de waarden van offset naar het centrum van de massa van het vliegtuig en de richting van de installatie in.",
                pt: "Preencha os valores de desvio em relação ao centro da massa da aeronave e a direção de instalação.",
                ru: "Введите значения смещения к центру масс летательного аппарата и направление установки."
            },
            mounting_warntips0: {
                "zh-cn": "务必确保IMU Pro模块正面朝上安装，模块箭头方向与调参设置方向朝向一致，否则将严重影响飞行安全",
                en: "The IMU Pro module's top side should face upward. The orientation set in DJI Assistant 2 should match the orientation of the arrow on the module. If these two don't match, flight safety will be affected"
            },
            mounting_warntips1: {
                "zh-cn": "务必确保GPS-Compass Pro模块安装牢固，模块箭头方向与飞行器机头朝向保持一致，否则将严重影响飞行安全",
                en: "Ensure that the GPS-Compass Pro module is securely mounted and the arrow is pointing towards the front of the aircraft. Otherwise flight safety will be affected"
            },
            drtk_warning0: {
                "zh-cn": "务必确保天线偏移量位置与实际安装位置一致，不可弄错顺序，否则将严重影响飞行安全",
                en: "Ensure that the antenna offsets set in DJI Assistant 2 match the modules' positions. Ensure both antennas are positioned correctly, otherwise flight safety will be affected"
            },
            F_CHL_VIDEO_FREQ: {
                "zh-cn": "频率",
                en: "Frequency"
            },
            F_CHL_VIDEO_DEFAULT_OUTPUT: {
                "zh-cn": "默认脉宽",
                en: "Default Pulse Bandwidth"
            },
            F_CHL_VIDEO_ACTIVE_OUTPUT: {
                "zh-cn": "触发带宽",
                en: "Triggering Bandwidth"
            },
            F_CHL_PAUSE_FREQ: {
                "zh-cn": "频率",
                en: "Frequency"
            },
            F_CHL_PAUSE_DEFAULT_OUTPUT: {
                "zh-cn": "默认脉宽",
                en: "Default Pulse Width"
            },
            F_CHL_PAUSE_ACTIVE_OUTPUT: {
                "zh-cn": "触发带宽",
                en: "Triggering Bandwidth"
            },
            fchannel_video: {
                "zh-cn": "录像",
                en: "Record"
            },
            fchannel_pause: {
                "zh-cn": "回放",
                en: "Playback"
            },
            language: {
                "zh-cn": "语言",
                en: "Language"
            },
            chinese: {
                "zh-cn": "中文",
                en: "中文"
            },
            english: {
                "zh-cn": "英文",
                en: "English"
            },
            rtk_error_code_1000: {
                "zh-cn": "读取参数成功",
                en: "Parameter loading successful"
            },
            rtk_error_code_1001: {
                "zh-cn": "读取参数失败",
                en: "Parameter loading failed"
            },
            rtk_error_code_2000: {
                "zh-cn": "设置参数成功",
                en: "Parameter setting successful"
            },
            rtk_error_code_2001: {
                "zh-cn": "设置参数失败",
                en: "Parameter setting failed"
            },
            forgetpswlink: {
                "zh-cn": "https://account.dji.com/resetPasswd?appId=store&locale=zh_CN",
                en: "https://account.dji.com/resetPasswd?appId=store&locale=en_US",
                jp: "https://account.dji.com/resetPasswd?appId=store&locale=ja_JP",
                it: "https://account.dji.com/resetPasswd?appId=store&locale=en_US",
                de: "https://account.dji.com/resetPasswd?appId=store&locale=en_US",
                es: "https://account.dji.com/resetPasswd?appId=store&locale=en_US",
                fr: "https://account.dji.com/resetPasswd?appId=store&locale=en_US",
                nl: "https://account.dji.com/resetPasswd?appId=store&locale=en_US",
                pt: "https://account.dji.com/resetPasswd?appId=store&locale=en_US",
                ru: "https://account.dji.com/resetPasswd?appId=store&locale=en_US"
            },
            wifisettip: {
                "zh-cn": "当飞行器连接了遥控器时无法修改SSID和密码。请将飞行器设置为移动设备连接模式再连接DJI ASSISTANT2进行修改。",
                en: "Cannot change the Wi-Fi name and password while the aircraft is connected to a remote controller. Set the aircraft to mobile device connection mode then connect to DJI Assistant 2 to make changes. "
            },
            confirmActivate: {
                "zh-cn": "确定激活",
                en: "Confirm"
            },
            productUseTerms: {
                "zh-cn": "DJI航拍飞行器产品使用条款",
                en: "DJI UAS Products Terms of Use",
                jp: "DJI 無人航空システム製品 利用規約（日本）"
            },
            productUseTermsContent: {
                "zh-cn": "谢谢您关注深圳市大疆创新科技有限公司（“DJI”）提供的航拍飞行器产品（“本产品”）。请仔细阅读下列条款。通过使用DJI GO或DJI GO 4应用程序激活本产品并在本页面点击“我同意”，您确认您已经阅读、理解并且同意受下列条款和条件、DJI隐私权政策（网址为http://www.dji.com/cn/policy，已经以引用的方式包含在本条款中）、DJI GO应用程序使用条款（网址为http://djistatic.com/agreement/dji-go-tos.html）、DJI GO 4应用程序使用条款（网址为http://djistatic.com/agreement/dji-go-4-tos.html）以及DJI.com使用条款（网址为http://www.dji.com/cn/terms）的约束（以上文件统称为“条款”）。如果您不适格或者不接受条款或者DJI隐私政策的任何内容，则您将不能使用本产品。您可以根据DJI售后服务政策（网址为http://www.dji.com/cn/service/policy）在您收到货物的7个自然日内将未激活的产品退回，以获得全额退款。 本产品不是玩具，而是一款设计复杂的飞行器。即使产品使用了最先进的技术，不合理的操作仍然会导致人身伤害或财产损失。请在首次飞行前，仔细阅读用户手册、快速入门指南、免责声明和安全操作指引、智能飞行电池安全使用指引等产品相关说明材料。上述材料可见于产品包装内，DJI GO或DJI GO 4应用程序内“学院-说明书”功能中，或DJI官方网站（网址为http://www.dji.com）相应产品页面上。 您必须登录DJI GO或DJI GO 4或其他由DJI提供的基于移动端的应用程序以连接本产品并通过该等应用程序操作本产品，否则，本产品可能无法正常使用，并极有可能产生危险导致财产损失或人身损害。 1. 适格。 您必须至少年满18周岁才能使用本产品。在接受本条款之前，您已向我们作出如下陈述和保证：（a）您已经至少年满18周岁；（b）您拥有或在使用产品前将拥有一个DJI账号；以及（c）您激活和使用本产品的行为均符合所有适用的法律、法规的规定。如果您是以实体、组织或者公司的名义使用本产品，则您陈述并保证您有权使该组织受本条款的约束，并且您同意以该组织的名义接受本条款的约束。 2. 反馈。如果您选择提供与本产品有关的建议（“反馈 ”），则您谨此向DJI授予一项不受限制的、永久性的、不可撤销的、非排他性的、已经完全支付费用的、无特许费的权利，以便DJI能够以任何方式并为了任何目的利用该等反馈，包括改进本产品和创造其他产品和服务。 3. 您的义务。通过使用本产品并同意这些条款，您保证您使用本产品并参与相关活动的行为符合适用法律法规的相关规定，并保证您不会将网站用于非本条款明确规定的情况。对于中国境内的用户，您同意遵守《中华人民共和国保守国家秘密法》、《中华人民共和国著作权法》、《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》、《互联网电子公告服务管理规定》、《信息网络传播权保护条例》和其他适用的法律、法规与实施办法。DJI保留审查、删除或者禁止访问用户内容的权利，如果这些用户内容违反了中国的适用法律和法规。DJI还欢迎用户举报任何违反适用的法律、法规的用户内容。 4. 材料。DJI提供的视觉界面、图形、设计、汇编作品、信息、数据、计算机代码（包括源代码或者目标代码）、产品、服务和本产品的所有其他元素（“材料 ”）均受知识产权法和其他法律保护。本产品中包含的所有材料均是DJI或者我们的第三方许可商的财产。除非经过DJI的明确授权，您不得使用材料。除本条款中明确授予的权利外，DJI保留对材料的所有其他权利。 5. 补偿。您将对您使用本产品的行为负责，并且您应当为DJI及其高级管理人员、董事、雇员、顾问、附属公司、子公司和代理人（统称为“DJI实体 ”）提供辩护和补偿，使DJI实体免遭由于下列事项发生或者与下列事项有任何关系的任何索赔、责任、损害赔偿、损失和费用，包括合理的律师费和成本：（a）您访问、使用或者声称使用本产品的行为；（b）您违反本条款、本条款中提及的任何陈述、保证或者约定，或者任何适用的法律或法规的任何规定；（c）您侵犯任何第三方的权利，包括任何知识产权或者发表权、机密、其他财产或者隐私权；或者（d）您和任何第三方之间的任何争议或者事项。对于您承担赔偿责任的任何事项，我们保留自行承担费用对其进行独家辩护和控制的权利（但不会因此限制您就该事项承担的赔偿责任），在此情形下，您同意在我们对索赔进行辩护的过程中给予配合。 6. 免责声明；无担保。 本产品以及通过本产品提供的所有材料和内容均是“按现状”和“按原状”提供的，而不附加任何明示或者默示的担保或者条件。对于本产品以及通过本产品或产品配件提供的所有材料和内容，DJI实体拒绝提供任何种类的明示的或者默示的担保，包括：（A）关于适销性、适合特定目的、产权、安宁享用权或者不侵权的任何默示担保；以及（B）由于交易过程、惯例或者行规发生的任何担保。DJI实体不能保证本产品或者本产品的任何部分或者通过本产品提供的任何材料或者内容，将不会发生中断、是安全的或者不存在任何错误、病毒或者其他有害成分，并且不能保证任何该等问题是能够纠正的。 您从本产品或者通过本产品提供的任何材料或者内容获得的任何建议或者信息（无论是口头的还是书面的）均不会创设本条款中没有明确载明的、与DJI实体或者本产品或产品配件或部件有关的任何保证。在您使用或者访问本产品或产品配件，以及使用或者访问通过本产品提供的任何材料或者内容时，您将承担由此而可能发生的任何损害风险。您理解并且同意，您使用本产品或产品配件，以及使用或访问材料时，应当根据您自己的独立判断并自行承担风险，并完全独立承担因您使用或不能使用本产品而造成的人身伤害、死亡、您的或第三方的财产损失（包括与使用本产品相关的计算机系统、移动设备及其他DJI硬件设备）。 某些国家的法律可能会禁止免除担保类条款，因此您在不同的国家的相关权利可能会有所不同。 7. 责任限制。 在任何情况下，DJI实体均不会向您承担由于您使用或者无法使用本产品、产品配件，或在本产品上提供的任何材料或者内容引起的任何间接的、偶然的、特别的、后续发生的或者惩罚性的损害赔偿（包括对利润损失、商誉损失或者其他无形损失的损害赔偿），无论该损害赔偿是基于保证、合同、侵权（包括过失侵权）、法律或者任何其他法律理论提出的，也无论DJI实体是否已经被告知发生损害的可能性。 除双方另行规定，DJI实体对您承担的由于使用或者无法使用本产品的任何部分而引起的或者与其有关的，或者由于其他原因在本条款项下发生的（无论是由于合同、侵权或者其他原因），任何损害赔偿的总额将以500人民币为限。 某些国家的法律不允许排除或者限制对后续发生的或者偶然性损害的赔偿责任。因此，上述限制可能对您不适用。 本条款中规定了责任限制或者免除担保或者排除损害赔偿的每一项条文均旨在并且事实上也在本条款项下的各方当事人之间进行了风险分配。这种分配是当事人之间进行谈判的必要基础。每一项这类条文均是可分的并独立于本条款的所有其他条文。即使任何有限的救济未能实现其必要目的，本第7条中规定的限制仍然是适用的。 8. 管辖法律。 本条款受中华人民共和国法律管辖。您与DJI的任何纠纷或争议，任何一方都应提交至深圳市南山区人民法院诉讼解决。 9. 一般规定。 您同意，本条款以及以引用方式明确地包含在本条款中的隐私政策和任何其他协议构成您和DJI之间关于您使用本产品的完整的并具有排他性的谅解和约定。除非上文已经明确允许，本条款仅能由本条款各方当事人的授权代表以书面形式签署的协议予以修改。未经我们的事先书面同意，您不得全部或者部分地转让或者让与本条款或者您在本条款项下的权利（无论是否根据法律的规定）。我们可以随时转让本条款，而无需事先通知或者征得同意。如果我们未能要求执行本条款的任何规定，均不会因此影响我们在此后的任何其他时间要求履行的权利；我们放弃追究本条款或者本条款之任何规定的任何违约或者违反，也不得视为对任何此后的违约或者违反的弃权或者对该规定本身的放弃。本条款中使用的条文标题仅为方便而是，对任何条文的理解均不会产生任何影响。如果本条款的任何部分被认定为是无效的或者无法执行的，则该等不可执行的部分将在最大可能的范围内视为有效，并且剩余部分仍然完全有效。在本条款终止后，第1条和第3至10条以及DJI隐私政策、DJI GO应用程序使用条款、DJI GO 4应用程序使用条款、DJI网站使用条款和任何其他附属协议仍将继续有效。 10. 联系方式。本产品是由深圳市大疆创新科技有限公司及其关联公司提供的，其地址位于中国深圳市南山区高新南四道18号创维半导体设计大厦西座14楼，邮编518057。您可以按照上述地址向我们发送邮件，也可以向我们的电子邮箱 support@dji.com发送电子邮件。 更新于2017年5月20日",
                en: "Thank you for your interest in this unmanned aerial system (UAS) product (the “Product”) offered by SZ DJI Technology Co., Ltd. (“DJI”). Please read the following terms and conditions carefully. By activating this product via DJI Go or DJI Go 4 application and tapping “I Agree” on this page, you acknowledge that you have read, understood, and agree to be bound by the following terms and conditions (the “Product Terms”), the DJI Go application Terms (http://djistatic.com/agreement/dji-go-tos.html) (or the DJI Go 4 application Terms, available at http://djistatic.com/agreement/dji-go-4-tos.html), the DJI Store Terms of Sale (http://www.dji.com/terms), and the DJI Privacy Policy (http://www.dji.com/policy) (together, these “Terms”). If you are not eligible or do not agree to any of the Terms, then you may not use the Product. You may be entitled to a full refund of your purchase of the Product if you return the inactivated Product within seven (7) days in accordance with the DJI Refund and Replacement Policy (http://www.dji.com/service). To access certain features of the Product, you must use the DJI GO or the DJI GO 4 application to control the Product. You might be required to login to such apps with your DJI account. Subject to the country specific provisions below, these Terms provide that all disputes between you and DJI will be resolved by BINDING ARBITRATION. YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT to assert or defend your rights under these Terms, except for matters that may be taken to small claims court. Your rights will be determined by a NEUTRAL ARBITRATOR and NOT a judge or jury, and your claims cannot be brought as a class action. Please review Section 10 (“Dispute Resolution and Arbitration”) of these Terms for the details regarding your agreement to arbitrate any disputes with DJI. FOR EUROPEAN UNION (EU) USERS: if a dispute arises, we strongly encourage you to first contact us directly to seek a resolution. We will consider reasonable requests to resolve the dispute through alternative dispute resolution procedures, such as arbitration, as an alternative to litigation. In the interest of resolving disputes between you and DJI in the most expedient and cost effective manner, DJI’s strong preference is that you and DJI resolve any and all disputes arising in connection with these Terms by binding arbitration, without prejudice to section 8 of the Product Terms. THE PRODUCT IS NOT A TOY. IT IS A COMPLICATED AIRCRAFT. While the Product adopts the most advanced technology, inappropriate use of the Product could result in personal injury or property damages. Please read the User Manual, Quick Start Guide, Disclaimer and Safety Guidelines, and Intelligent Flight Battery Safety Guidelines associated with the Product before your first use of the Product. These documents are included in the Product package and are also available online on the DJI Product page at http://www.dji.com. You acknowledge and agree that, as provided in greater detail in these Terms: • subject to the country specific provisions below, the Product is provided “as-is” and without warranties of any kind other than those provided for in the DJI Limited Warranty (http://www.dji.com/service), and DJI’s liability to you is limited. • FOR EU USERS: the Product is provided “as-is” and without warranties of any kind except for those provided for in the DJI Limited Warranty (http://www.dji.com/service) and any warranties implied by law, such as legal guarantees of conformity for goods offered to consumers in the EU, and DJI’s liability to you is limited as set out in the country variations section of the Product Terms. • FOR AUSTRALIAN USERS: except for your right and statutory guarantees as described in Section 6.1, the Product is provided “as-is” and without warranties of any kind other than those provided for in the DJI Limited Warranty (http://www.dji.com/service), and DJI’s liability to you is limited. 1. Eligibility. You must have a DJI account to use the Product. By agreeing to these Terms, you represent and warrant to us that: (a) you are at least 18 years of age; (b) you have or will have a DJI account at such time that you attempt to use the Product; and (c) your activation and your use of the Product is in compliance with all applicable laws and regulations. If you are agreeing to these terms or using the Product on behalf of an entity, organization, company, or individual, you represent and warrant that you have the authority to bind that organization or individual to these Terms and you agree to be bound by these Terms on behalf of that organization or individual. 2. Feedback. If you choose to provide input or suggestions regarding problems with, or proposed modifications or improvements to, the Product (“Feedback”), then you hereby grant DJI an unrestricted, perpetual, irrevocable, non-exclusive, fully-paid, royalty-free right to exploit such Feedback in any manner and for any purpose with no duty to make any payments to you for such exploitation. 3. Your Obligations. By using the Product, and by entering into these Terms, you represent and warrant that your use of the Product and your involvement of events or activities incidental to your use of the Product comply and will comply with all applicable laws, statutes, and regulations, and that you will not use the Product except as expressly permitted under these Terms. For users located in China, you agree to comply with the “People’s Republic of China on Guarding State Secrets Law,” “Copyright Law of People’s Republic of China,” “Regulations on Protection of Computer Information System Security People's Republic of China,” “Regulations on Computer Software Protection,” “Internet Electronic Bulletin Service Management Requirements,” “Information Network Transmission Right Protection Ordinance” and other applicable laws and regulations. For users located in Australia, this includes complying with the relevant provisions of the Civil Aviation Safety Regulations 1998 and the Privacy Act 1998 (Cth). For users located in the EU, this includes complying with the relevant privacy and data protection laws, and civil aviation and safety regulations applicable in the country where you are located. 4. Materials. The visual interfaces, graphics, design, firmware, software, services, and all other elements of the Product (“Materials”) provided by DJI are protected by intellectual property and other laws. All Materials contained in the Product are the property of DJI or our third-party licensors. DJI reserves all rights to the Materials not granted expressly in these Terms. 5. Indemnity. You are responsible for your use of the Product. You will defend and indemnify DJI and its officers, directors, employees, consultants, affiliates, subsidiaries and agents (together, the “DJI Entities”) from and against every claim, liability, damage, loss, and expense, including reasonable attorneys' fees and costs, arising out of or in any way connected with: (a) use or alleged use of the Product; (b) your violation of any portion of these Terms, any representation, warranty, or agreement referenced in these Terms, or any applicable law or regulation; (c) your violation of any third-party right, including any intellectual property right or publicity, confidentiality, other property, or privacy, right; or (d) any dispute or issue between you and any third party. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you (without limiting your indemnification obligations with respect to that matter), and in that case, you agree to cooperate with our defense of that claim. FOR EU USERS: THIS SECTION 5 DOES NOT APPLY. THE DISCLAIMERS AND WARRANTIES FOR EU USERS ARE SET OUT IN SECTION 12(A) FOR AUSTRALIAN USERS: THIS SECTION 5 DOES NOT APPLY. THE DISCLAIMERS AND WARRANTIES FOR AUSTRALIAN USERS ARE SET OUT IN SECTION 12(B) 6. Disclaimers; No Warranties. EXCEPT AS EXPRESSLY PROVIDED IN DJI LIMITED WARRANTY (POLICY AVAILABLE AT (HTTP://WWW.DJI.COM/SERVICE), THE PRODUCT AND ALL MATERIALS, AND CONTENT AVAILABLE THROUGH THE PRODUCT ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS, WITHOUT WARRANTY OR CONDITION OF ANY KIND, EITHER EXPRESS OR IMPLIED. THE DJI ENTITIES DISCLAIM ALL WARRANTIES OF ANY KIND, EXCEPT AS EXPRESSLY PROVIDED IN DJI LIMITED WARRANTY, WHETHER EXPRESS OR IMPLIED, RELATING TO THE PRODUCT, PRODUCT ACCESSORIES, AND ALL MATERIALS, INCLUDING: (A) ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, OR NON-INFRINGEMENT; AND (B) ANY WARRANTY ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE. THE DJI ENTITIES DO NOT WARRANT, EXCEPT AS EXPRESSLY PROVIDED IN DJI LIMITED WARRANTY, THAT THE PRODUCT, PRODUCT ACCESSORIES, OR ANY PORTION OF THE PRODUCT, OR ANY MATERIALS, WILL BE UNINTERRUPTED, SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS, AND DO NOT WARRANT THAT ANY OF THOSE ISSUES WILL BE CORRECTED. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE PRODUCT, PRODUCT ACCESSORIES, OR ANY MATERIALS WILL CREATE ANY WARRANTY REGARDING ANY OF THE DJI ENTITIES OR THE PRODUCT THAT IS NOT EXPRESSLY STATED IN THESE TERMS. YOU ASSUME ALL RISK FOR ANY DAMAGE THAT MAY RESULT FROM YOUR USE OF OR ACCESS TO THE PRODUCT, PRODUCT ACCESSORIES, AND ANY MATERIALS. YOU UNDERSTAND AND AGREE THAT YOU USE THE PRODUCT AT YOUR OWN DISCRETION AND RISK, AND THAT YOU ARE SOLELY RESPONSIBLE FOR ANY PERSONAL INJURY, DEATH, DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR DJI HARDWARE USED IN CONNECTION WITH THE PRODUCT) OR THIRD PARTY PROPERTY, OR THE LOSS OF DATA THAT RESULTS FROM YOUR USE OF OR INABILITY TO USE THE PRODUCT. SOME JURISDICTIONS MAY PROHIBIT A DISCLAIMER OF WARRANTIES AND YOU MAY HAVE OTHER RIGHTS THAT VARY FROM JURISDICTION TO JURISDICTION. FOR EU USERS: THIS SECTION 6 DOES NOT APPLY. THE DISCLAIMERS AND WARRANTIES FOR EU USERS ARE SET OUT IN SECTION 12(A) FOR AUSTRALIAN USERS: THIS SECTION 6 DOES NOT APPLY. THE DISCLAIMERS AND WARRANTIES FOR AUSTRALIAN USERS ARE SET OUT IN SECTION 12(B) 7. Limitation of Liability IN NO EVENT WILL THE DJI ENTITIES BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE PRODUCT, PRODUCT ACCESSORIES, OR ANY MATERIALS, FLIGHT ENVIRONMENT DATA, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT ANY DJI ENTITY HAS BEEN INFORMED OF THE POSSIBILITY OF DAMAGE. EXCEPT AS PROVIDED IN SECTION 10.4(iii), THE AGGREGATE LIABILITY OF THE DJI ENTITIES TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR ANY INABILITY TO USE ANY PORTION OF THE PRODUCT OR OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO $100. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES. ACCORDINGLY, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN THE PARTIES UNDER THESE TERMS. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS. THE LIMITATIONS IN THIS SECTION 7 WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE. FOR EU USERS: THIS SECTION 7 DOES NOT APPLY. LIMITATION OF LIABILITY FOR EU USERS ARE SET OUT IN SECTION 12(A) FOR AUSTRALIAN USERS: THIS SECTION 7 DOES NOT APPLY. LIMITATION OF LIABILITY FOR AUSTRALIAN USERS ARE SET OUT IN SECTION 12(B) 8. Governing Law and Jurisdiction. Subject to the country specific provisions below, these Terms are governed by the laws of the State of California without regard to conflict of law principles. If a lawsuit or court proceeding is permitted under these Terms, then you and DJI agree to submit to the personal and exclusive jurisdiction of the state courts and federal courts located within San Francisco County, California for the purpose of litigating any dispute. FOR EU USERS: THIS SECTION 8 DOES NOT APPLY. GOVERNING LAW AND JURISDICTION FOR EU USERS ARE SET OUT IN SECTION 12(A) FOR AUSTRALIAN USERS: THIS SECTION 8 DOES NOT APPLY. GOVERNING LAW AND JURISDICTION FOR AUSTRALIAN USERS ARE SET OUT IN SECTION 12(B) 9. General. These Terms and any other agreements expressly incorporated by reference into these Terms are the entire and exclusive understanding and agreement between you and DJI regarding your use of the Product. Except as expressly permitted above, these Terms may be amended only by a written agreement signed by authorized representatives of all parties to these Terms. You may not assign or transfer these Terms or your rights under these Terms, in whole or in part, by operation of law or otherwise, without our prior written consent. We may assign these Terms at any time without notice or consent. The failure to require performance of any provision will not affect our right to require performance at any other time after that, nor will a waiver by us of any breach or default of these Terms, or any provision of these Terms, be a waiver of any subsequent breach or default or a waiver of the provision itself. Use of section headers in these Terms is for convenience only and will not have any impact on the interpretation of any provision. If any part of these Terms is held to be invalid or unenforceable, the unenforceable part will be given effect to the greatest extent possible, and the remaining parts will remain in full force and effect. Upon termination of these Terms, Sections 1 and 3-10 and 12 of these Product Terms will survive, as will any other provisions specified as surviving the termination of the DJI Go Terms, the DJI Store Terms of Use, the DJI Privacy Policy, and any other applicable terms and conditions in such agreements. EXCEPTION, for EU USERS: We may assign our rights and obligations under these Terms without your prior express consent, provided that we assign the Terms on the same conditions or conditions that are no less advantageous to you. 10. Dispute Resolution and Arbitration FOR EU USERS: Section 10 is not applicable to you. 10.1 Generally. In the interest of resolving disputes between you and DJI in the most expedient and cost effective manner, you and DJI agree that every dispute arising in connection with these Terms will be resolved by binding arbitration. Arbitration is less formal than a lawsuit in court. Arbitration uses a neutral arbitrator instead of a judge or jury, may allow for more limited discovery than in court, and can be subject to very limited review by courts. Arbitrators can award the same damages and relief that a court can award. This agreement to arbitrate disputes includes all claims arising out of or relating to any aspect of these Terms, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and regardless of whether a claim arises during or after the termination of these Terms. YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND DJI ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION. 10.2 Exceptions. Despite the provisions of Section 10.1, nothing in these Terms will be deemed to waive, preclude, or otherwise limit the right of either party to: (a) bring an individual action in small claims court; (b) pursue an enforcement action through the applicable federal, state, or local agency if that action is available; (c) seek injunctive relief in a court of law; or (d) to file suit in a court of law to address an intellectual property infringement claim. FOR AUSTRALIAN USERS: Despite the provisions of Section 10.1, nothing in these Terms will be deemed to waive, preclude, or otherwise limit the right of either party to: (a) bring an individual action in small claims court; (b) claim in relation to your rights and statutory guarantees in Section 6.1; (c) seek injunctive relief in a court of law; or (d) to file suit in a court of law to address an intellectual property infringement claim. 10.3 Arbitrator. Any arbitration between you and DJI will be settled under the Federal Arbitration Act, and governed by the Commercial Dispute Resolution Procedures and the Supplementary Procedures for Consumer Related Disputes (collectively, “AAA Rules”) of the American Arbitration Association (“AAA”), as modified by these Terms, and will be administered by the AAA. The AAA Rules and filing forms are available online at www.adr.org, by calling the AAA at 1-800-778-7879, or by contacting DJI. 10.4 Notice; Process. A party who intends to seek arbitration must first send a written notice of the dispute to the other party by certified U.S. Mail or by Federal Express (signature required) or, only if such other party has not provided a current physical address, then by electronic mail (“Notice”). DJI’s address for Notice is: 14th Floor, West Wing, Skyworth Semiconductor Design Building, No.18 Gaoxin South 4th Ave, Nanshan District, Shenzhen, China, 518057. The Notice must: (a) describe the nature and basis of the claim or dispute; and (b) set forth the specific relief sought (“Demand”). The parties will make good faith efforts to resolve the claim directly, but if the parties do not reach an agreement to do so within 30 days after the Notice is received, you or DJI may commence an arbitration proceeding. During the arbitration, the amount of any settlement offer made by you or DJI must not be disclosed to the arbitrator until after the arbitrator makes a final decision and award, if any. If the dispute is finally resolved through arbitration in your favor, DJI will pay you the highest of the following: (i) the amount awarded by the arbitrator, if any; (ii) the last written settlement amount offered by DJI in settlement of the dispute prior to the arbitrator’s award; or (iii) $1,000. 10.5 Fees. If you commence arbitration in accordance with these Terms, DJI will reimburse you for your payment of the filing fee, unless your claim is for more than $10,000, in which case the payment of any fees will be decided by the AAA Rules. Any arbitration hearing will take place at a location to be agreed upon in San Francisco County, California, but if the claim is for $10,000 or less, you may choose whether the arbitration will be conducted: (a) solely on the basis of documents submitted to the arbitrator; (b) through a non-appearance based telephone hearing; or (c) by an in-person hearing as established by the AAA Rules in the county (or parish) of your billing address. If the arbitrator finds that either the substance of your claim or the relief sought in the Demand is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all fees will be governed by the AAA Rules. In that case, you agree to reimburse DJI for all monies previously disbursed by it that are otherwise your obligation to pay under the AAA Rules. Regardless of the manner in which the arbitration is conducted, the arbitrator must issue a reasoned written decision sufficient to explain the essential findings and conclusions on which the decision and award, if any, are based. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or expenses at any time during the proceeding and upon request from either party made within 14 days of the arbitrator’s ruling on the merits. 10.6 No Class Actions. YOU AND DJI AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both you and DJI agree otherwise, the arbitrator may not consolidate more than one person’s claims, and may not otherwise preside over any form of a representative or class proceeding. 10.7 Modifications of This Arbitration Provision. If DJI makes any future change to this arbitration provision, other than a change to DJI's address for Notice, you may reject the change by sending us written notice within 30 days of the change to DJI’s address for Notice, in which case your account with DJI will be immediately terminated and this arbitration provision, as in effect immediately prior to the changes you rejected will survive. 10.8 Enforceability. If Section 10.6 is found to be unenforceable or if the entirety of this Section 10 is found to be unenforceable, then the entirety of this Section 10 (other than, in the latter case, Section 10.6) will be null and void and, in that case, the parties agree that the exclusive jurisdiction and venue described in Section 8 will govern any action arising out of or related to these Terms. 11. Contact Information. The Product is offered by SZ DJI Technology Co., Ltd. and its affiliated companies, located at 14th Floor, West Wing, Skyworth Semiconductor Design Building, No.18 Gaoxin South 4th Ave, Nanshan District, Shenzhen, China, 518057. You may contact us by sending correspondence to that address or by emailing us at support@dji.com. 12. Country Variations. A. EU Users. For EU users the following sections apply: 5. Indemnity. You are responsible for your use of the Product. You agree to compensate in full DJI and its officers, directors, employees, consultants, affiliates, subsidiaries and agents (together, the “DJI Entities”) from and against every claim, liability, damage, loss, and expense, including reasonably foreseeable attorneys' fees and costs, arising out of or in any way connected with: (a) use or alleged use of the Product; (b) your violation of any portion of these Terms, any representation, warranty, or agreement referenced in these Terms, or any applicable law or regulation; (c) your violation of any third-party right, including any intellectual property right or publicity, confidentiality, other property, or privacy, right; or (d) any dispute or issue between you and any third party. If, at DJI’s request, you permit DJI, to assume the exclusive defense and control of any matter for which you are required to compensate us under this paragraph (without limiting your indemnification obligations with respect to that matter), and in that case, you agree to cooperate with our defense of that claim. 6. Disclaimers and Warranties. EXCEPT AS EXPRESSLY PROVIDED IN DJI LIMITED WARRANTY (POLICY AVAILABLE AT (HTTP://WWW.DJI.COM/SERVICE), THE PRODUCT AND ALL MATERIALS, AND CONTENT AVAILABLE THROUGH THE PRODUCT ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS, WITHOUT WARRANTY OR CONDITION OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE EXTENT PERMITTED BY LAW, THE DJI ENTITIES DISCLAIM ALL WARRANTIES OF ANY KIND, EXCEPT AS EXPRESSLY PROVIDED IN DJI LIMITED WARRANTY, WHETHER EXPRESS OR IMPLIED, RELATING TO THE PRODUCT, PRODUCT ACCESSORIES, AND ALL MATERIALS, INCLUDING: (A) ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE; AND (B) ANY WARRANTY ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE. THE DJI ENTITIES DO NOT WARRANT, EXCEPT AS EXPRESSLY PROVIDED IN DJI LIMITED WARRANTY, THAT THE PRODUCT, PRODUCT ACCESSORIES, OR ANY PORTION OF THE PRODUCT, OR ANY MATERIALS, WILL BE UNINTERRUPTED, SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS, AND DO NOT WARRANT THAT ANY OF THOSE ISSUES WILL BE CORRECTED. TO THE EXTENT PERMITTED BY LAW, NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE PRODUCT, PRODUCT ACCESSORIES, OR ANY MATERIALS WILL CREATE ANY WARRANTY REGARDING ANY OF THE DJI ENTITIES OR THE PRODUCT THAT IS NOT EXPRESSLY STATED IN THESE TERMS. YOU ASSUME ALL RISK FOR ANY DAMAGE THAT MAY RESULT FROM YOUR USE OF OR ACCESS TO THE PRODUCT, PRODUCT ACCESSORIES, AND ANY MATERIALS AND WHICH IS NOT ATTRIBUTABLE TO THE DJI ENTITIES OR TO THE PRODUCT. YOU UNDERSTAND AND AGREE THAT YOU USE THE PRODUCT AT YOUR OWN DISCRETION AND RISK, AND THAT YOU ARE SOLELY RESPONSIBLE FOR ANY PERSONAL INJURY, DEATH, DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR DJI HARDWARE USED IN CONNECTION WITH THE PRODUCT) OR THIRD PARTY PROPERTY, OR THE LOSS OF DATA THAT RESULTS FROM YOUR USE OF OR INABILITY TO USE THE PRODUCT AND FOR WHICH THE DJI ENTITIES CANNOT BE HELD LIABLE UNDER THE TERMS. SOME JURISDICTIONS MAY PROHIBIT A DISCLAIMER OF WARRANTIES, IN PARTICULAR DISCLAIMER OF WARRANTIES PROVIDED OR IMPLIED BY LAW (SUCH AS LEGAL GUARANTEES OF CONFORMITY FOR GOODS OFFERED TO EU CONSUMERS) AND YOU MAY HAVE OTHER RIGHTS THAT VARY FROM JURISDICTION TO JURISDICTION. 7. Limitation of Liability. IN NO EVENT WILL THE DJI ENTITIES BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE PRODUCT, PRODUCT ACCESSORIES, OR ANY MATERIALS, FLIGHT ENVIRONMENT DATA, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT ANY DJI ENTITY HAS BEEN INFORMED OF THE POSSIBILITY OF DAMAGE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES. ACCORDINGLY, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. FURTHERMORE, NOTHING IN THESE TERMS LIMITS OR EXCLUDES YOURS OR OUR LIABILITY FOR INTENTIONAL VIOLATION OF THESE TERMS, FRAUDULENT MISREPRESENTATION, FOR DEATH OR PERSONAL INJURY RESULTING FROM OUR NEGLIGENCE OR THE NEGLIGENCE OF OUR AGENTS OR EMPLOYEES OR FOR ANY OTHER LIABILITY THAT CANNOT BE LIMITED OR EXCLUDED BY LAW. EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN THE PARTIES UNDER THESE TERMS. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS. THE LIMITATIONS IN THIS SECTION 7 WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE. 8. Governing Law and Jurisdiction. You and DJI both agree that these Terms are non-exclusively governed by the laws of England and Wales, which means that the laws of England and Wales apply but that you still enjoy the protection of the consumer protection laws of the country in which you live. You agree to submit to the non-exclusive jurisdiction of the English Courts, which means that you may bring a claim to enforce your consumer protection rights in connection with these Terms in a court located in England or in the EU country in which you live. However, if you are a consumer, DJI will bring claims against you before the courts of the EU country in which you live. B. Australian Users. For Australian users the following sections apply: 5. Indemnity. You are responsible for your use of the Product. You will defend and indemnify DJI and its officers, directors, employees, consultants, affiliates, subsidiaries and agents (together, the “DJI Entities”) from and against every claim, liability, damage, loss, and expense, including reasonable attorneys' fees and costs, arising out of or in any way connected with: (a) negligent use or alleged negligent use of the Product; (b) your violation of any portion of these Terms, any representation, warranty, or agreement referenced in these Terms, or any applicable law or regulation; (c) your violation of any third-party right, including any intellectual property right or publicity, confidentiality, other property, or privacy, right; or (d) any dispute or issue between you and any third party. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you (without limiting your indemnification obligations with respect to that matter), and in that case, you agree to cooperate with our defense of that claim. 6. Disclaimers and Warranties. 6.1 Statutory Guarantees. IF YOU ARE AN AUSTRALIAN RESIDENT THEN OUR GOODS AND SERVICES COME WITH GUARANTEES THAT CANNOT BE EXCLUDED UNDER THE AUSTRALIAN CONSUMER LAW. YOU ARE ENTITLED TO A REPLACEMENT OR REFUND FOR A MAJOR FAILURE AND COMPENSATION FOR ANY OTHER REASONABLY FORESEEABLE LOSS OR DAMAGE. YOU ARE ALSO ENTITLED TO HAVE THE GOODS AND SERVICES REPAIRED OR REPLACED IF THE GOODS AND SERVICES FAIL TO BE OF ACCEPTABLE QUALITY AND THE FAILURE DOES NOT AMOUNT TO A MAJOR FAILURE. GUARANTEES INCLUDE (WITHOUT LIMITATION) THAT (A) THE PRODUCT IS PROVIDED WITH ACCEPTABLE CARE, SKILL AND TECHNICAL KNOWLEDGE AND TAKING ALL NECESSARY STEPS TO AVOID LOSS AND DAMAGE; (B) THE PRODUCTS ARE FIT FOR THE PURPOSE OR GIVE THE RESULTS THAT YOU AND DJI AGREED TO; (C) THE PRODUCT IS DELIVERED WITHIN A REASONABLE TIME. TO CLAIM UNDER THIS WARRANTY YOU MUST CONTACT: DJI Technology Australia Pty. Ltd. Unit 12 125-127 Highbury Road Burwood VIC 3125, Australia IF YOU MAKE A CLAIM AND ARE NOT ENTITLED TO A STATUTORY GUARANTEE, DJI RESERVES THE RIGHT TO REQUIRE THAT THE YOU PAY ANY EXPENSES AND COSTS ASSOCIATED WITH THE CLAIM. 6.2 Disclaimer. NOTHING IN THIS SECTION 6.2 LIMITS YOUR RIGHTS AND STATUTORY GUARANTEES AS DESCRIBED IN SECTION 6.1. THE PRODUCT AND ALL MATERIALS, AND CONTENT AVAILABLE THROUGH THE PRODUCT ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS, WITHOUT WARRANTY OR CONDITION OF ANY KIND, EITHER EXPRESS OR IMPLIED. THE DJI ENTITIES DISCLAIM ALL WARRANTIES OF ANY KIND, EXCEPT AS EXPRESSLY PROVIDED IN DJI LIMITED WARRANTY, WHETHER EXPRESS OR IMPLIED, RELATING TO THE PRODUCT, PRODUCT ACCESSORIES, AND ALL MATERIALS, INCLUDING: ANY WARRANTY ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE. THE DJI ENTITIES DO NOT WARRANT, EXCEPT AS EXPRESSLY PROVIDED IN DJI LIMITED WARRANTY, THAT THE PRODUCT, PRODUCT ACCESSORIES, OR ANY PORTION OF THE PRODUCT, OR ANY MATERIALS, WILL BE UNINTERRUPTED, SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS, AND DO NOT WARRANT THAT ANY OF THOSE ISSUES WILL BE CORRECTED. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE PRODUCT, PRODUCT ACCESSORIES, OR ANY MATERIALS WILL CREATE ANY WARRANTY REGARDING ANY OF THE DJI ENTITIES OR THE PRODUCT THAT IS NOT EXPRESSLY STATED IN THESE TERMS. YOU ASSUME ALL RISK FOR ANY DAMAGE THAT MAY RESULT FROM YOUR USE OF OR ACCESS TO THE PRODUCT, PRODUCT ACCESSORIES, AND ANY MATERIALS. YOU UNDERSTAND AND AGREE THAT YOU USE THE PRODUCT AT YOUR OWN DISCRETION AND RISK, AND THAT YOU ARE SOLELY RESPONSIBLE FOR ANY PERSONAL INJURY, DEATH, DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR DJI HARDWARE USED IN CONNECTION WITH THE PRODUCT) OR THIRD PARTY PROPERTY, OR THE LOSS OF DATA THAT RESULTS FROM YOUR USE OF OR INABILITY TO USE THE PRODUCT. THE BENEFITS PROVIDED TO THE CONSUMER BY THE WARRANTY ARE IN ADDITION TO OTHER RIGHTS AND REMEDIES AVAILABLE TO THE CONSUMER UNDER THE LAW INCLUDING THE STATUTORY GUARANTEES AS DESCRIBED IN SECTION 6.1. 7. Limitation of Liability. EXCEPT FOR OUR LIABILITY TO YOU UNDER THE STATUTORY GUARANTEES DESCRIBED IN SECTION 6.1 (WHICH IS NOT LIMITED OR EXCLUDED): IN NO EVENT WILL THE DJI ENTITIES BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE PRODUCT, PRODUCT ACCESSORIES, OR ANY MATERIALS, FLIGHT ENVIRONMENT DATA, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT ANY DJI ENTITY HAS BEEN INFORMED OF THE POSSIBILITY OF DAMAGE. EXCEPT AS PROVIDED IN SECTION 10.4(iii), THE AGGREGATE LIABILITY OF THE DJI ENTITIES TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR ANY INABILITY TO USE ANY PORTION OF THE PRODUCT OR OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO $100. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES. ACCORDINGLY, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN THE PARTIES UNDER THESE TERMS. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS. THE LIMITATIONS IN THIS SECTION 7.1 WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE. 8. Governing Law and Jurisdiction. These Terms are governed by the laws of the State of California without regard to conflict of law principles. If a lawsuit or court proceeding is permitted under these Terms, then you and DJI agree to submit to the personal and exclusive jurisdiction of the state courts and federal courts located within San Francisco County, California for the purpose of litigating any dispute. For avoidance of doubt, Section 10 will not apply to matters that may be taken to the small claims court or matters relating to your rights and statutory guarantees described in Section 6.1.",
                jp: "最終更新日： 年 月 日 SZ DJI Technology Co., Ltd. (以下「DJI」といいます)の無人航空システム製品（以下「本製品」といいます）にご興味をお持ちいただきありがとうございます。下記の諸条件をよくお読みください。DJI GOアプリを通じて本製品をアクティベイトし、かつ本ページにある「I Agree」をクリックすることをもって、以下に記載する諸条件、DJI GOアプリの利用規約(http://djistatic.com/agreement/dji-go-tos.htmlで閲覧可能)、DJIストアの利用規約(http://www.dji.com/termsで閲覧可能)ならびにDJIプライバシーポリシー（http://www.dji.com/jp/policyで閲覧可能）（以下「諸条件」といいます）を読み、同意したものとみなします。これらの諸条件もしくはDJIプライバシーポリシーに適合せず、または同意されない場合、本製品をご利用いただけない場合があります。お客様が購入後7日以内に、DJIのアフターサービスポリシーに従い、アクティベイトされていない本製品を返品した場合、本製品に対する支払いの全額の払い戻しを受けることができます。 (http://www.dji.com/jp/service/policy). 本製品は玩具ではありません。複雑な航空機です。 本製品が最先端技術を採用しているため、不当な使用は人身傷害または財産的損害をもたらす恐れがあります。 お客様は、より詳しく説明した以下の諸条件に同意したものみなします。 • お客様は、個人識別可能な情報およびお客様の位置に関する情報の収集（位置情報の収集を含みますがこれに限りません）ならびに利用が、DJIプライバシーポリシーに従って行われることに同意します。 • 本製品の特定の機能にアクセスする際に、GPS座標等、お使いの端末の位置に関する情報へのアクセスが要求される場合があります。 • 本製品は、「現状有姿」で提供され、DJIアフターサービスポリシー(http://www.dji.com/jp/service/policy)で定めたもの以外、いかなる種類の保証もされません。お客様に対するDJIの責任は限定されます。また、 1. 適格条件：本製品の利用には20歳以上であり、かつDJIアカウントを有しなければなりません。お客様は、諸条件に同意することで、以下の項目を表明し、保証するものとみなします：(a) 20歳以上である、(b) 本製品を使用しようとするときDJIアカウントを所有しもしくは所有する予定である、(c)本製品のアクティベイトおよびご利用は適用されるすべての法規制を遵守している。本製品のご利用が団体、組織もしくは企業を代表したものである場合、お客様は、その組織等を諸条件に従わせる権限を有すること、及びその組織等を代表して諸条件に従うこと表明し、保証します。 ２． フィードバック：お客様が、本製品の問題、あるいは変更または改善について意見を提示もしくは提案する場合（以下「フィードバック」といいます）、お客様は、DJIに、かかるフィードバックを無制限で、恒久的、取消不可、非独占的、全額支払い済みかつロイヤルティーフリーで、使用する権利を、方法や目的のいかんに関わらず付与するものとし、また、DJIは、目的を問わず、そのフィードバックの使用に対してお客様に一切の支払い義務は負わないものとします。 ３． お客様の義務：本製品を使用すること、ならびに諸条件をご覧になることで、お客様 はご自身による本製品の使用、および本製品の使用に付帯するイベントあるいはアクティビティへの参加が、適用されるすべての法律、規則および規制を遵守していること、及び諸条件で明示的に認められている場合を除き、本製品を使用しないことを表明、保証するものとします。中国国内のユーザーは「中華人民共和国保守国家機密法」、「中華人民共和国　著作権法」「中華人民共和国コンピューター情報システム安全保護条例」、「コンピューターソフトウェア保護条例」「中国のネット電子公告サービス管理規則」、「情報ネット伝達権保護条例」およびその他の適用法令、実装方法を遵守することに同意するものとします。 ４． マテリアル： DJIが提供するビジュアルインターフェース、グラフィック、デザイン、ファームウェア、ソフトウエア、各種サービス、および本製品におけるその他すべての要素（以下「マテリアル」といいます）は、知的財産権ならびにその他の法律で保護されます。本製品に含まれるすべてのマテリアルは、DJIまたはDJIの第三者ラインセンサーの所有物です。DJIは、これらの諸条件で明示的に付与されていない当該マテリアルに対するすべての権利を留保します。 ５． 補償：お客様はご自身の本製品利用に責任を負うものとします。お客様は、(a)本製品の利用または利用とみなされる行為、(b)諸条件のあらゆる規定、諸条件で言及される表明、保証または同意への違反、もしくは適用される法令への違反、(c)知的財産権またはパブリシティ権、守秘義務、その他の財産権またはプライバシーの権利を含む第三者の権利の侵害、(d)お客様と第三者間での紛争または問題からまたは、これらに関連して生じるクレーム、責任、損害、損失および費用（合理的な弁護士費用を含む）について、DJIおよびDJIの幹部、役員、従業員、コンサルタント、関連会社、子会社ならびに代理人（総称して「DJIエンティティ」といいます）にかわって対応し、また補償するものとします。DJIは、お客様による補償対象にならない案件について、（その案件に関して、お客様の補償義務を制限することなく）、当社の費用で、独自に対応し、コントロールする権利を留保します。その場合、お客様はそのクレームに対する当社の対応に協力することに同意するものとします。 ６． 免責；保証無し　DJIアフターサービスポリシー (http://www.dji.com/service) で定めたもの以外、本製品およびすべてのマテリアル、ならびに本製品を通じて提供されるコンテンツは、DJIアフターサービスポリシーで定めたもの以外、明示黙示を問わず、一切の保証または条件を伴うことなく、「現状有姿で」「利用可能な状態で」提供されます。DJIエンティティは、以下を含む本製品、本製品のアクセサリーおよびすべてのマテリアルに関して、明示黙示を問わず、一切の保証も致しません。(A)商品適格性、特定の目的のための適合性、権限、平穏享有権あるいは非侵害性、(B) 取引、使用あるいは取引慣行で生じる一切の保証。DJIエンティティは、DJIアフターサービスポリシーで定めたもの以外、本製品、本製品のアクセサリーまたは本製品の一部、あるいはマテリアルに関して保証の責任を負わず、安全であること、エラー、ウィルスまたはその他有害な構成要素が無いことを保証いたしません。また、前述の問題を是正することも保証いたしません。 お客様による本製品、本製品のアクセサリーやマテリアルから得た助言または情報をもとに、口頭、書面を問わず、諸条件でDJIエンティティまたは本製品について明示的に規定していない項目について、保証が提供されることはありません。お客様は、本製品、本製品のアクセサリーおよびマテリアルを利用すること、もしくはそれらにアクセスすることに起因する損害リスクすべてを負うものとします。お客様は、お客様自身の裁量および責任で本製品を利用し、いかなる人身傷害、死亡、ご自身の器物破損（本製品に伴い使用するお持ちのコンピューターシステムまたはモバイル端末、DJIハードウエア等を含みます）、または第三者の器物破損、もしくは本製品の利用または利用不可の状況に起因するデータ損失に対して、単独責任を負うことに理解、同意するものとします。 法域によっては保証の免責を禁じている場合があり、お客様は法域によって異なる他の権利を有する可能性があります。 ７． 責任限定 DJIエンティティは、本製品、本製品のアクセサリーあるいは何らかのマテリアル、飛行環境データへのアクセスまたは使用に関連し、もしくはアクセスまたは使用不可に起因しまたはこれに関連して生じる間接的、偶発的、特別、必然的、懲罰的損害（利益、信用、その他の無形資産の損失を含みます）について、保証、契約、不法行為（過失も含む）、法令、その他の法理論に基づくものでも、DJIエンティティがその損害リスクについて通知を受けていたか否かに関わらず、一切の法的責任を負いません。 本サービスの一部の利用または利用不可に起因しまたはこれに関連して生じたあらゆるクレームまたはその他諸条件の下で、DJIエンティティが負う負債総額は、契約の記述、不法行為その他の有無に関わらず、＄100を限度額とします。 DJIおよびお客様間の本サービスに関わる合意が、日本の消費者契約法下の消費者契約とみなされる場合、DJIによる重過失もしくは故意の不法行為が発生した場合、免責の制限は適用されません。 法域によっては、派生的または付随的な損害に対する責任の免除あるいは限定が認められていません。したがって、上記の免責範囲は適用されない場合があります。 責任制限、保証の否認、あるいは損害の免責を規定している諸条件の各条項は、諸条件下の当事者間で生じるリスクを対象とし、各当事者に配分するものです。この配分は当事者間の取引や交渉の重要な基本要素になります。これらの条項は、諸条件のその他すべての条項から分離可能かつ独立しています。本第7項の制限は、いかなる限定的救済策が本質的目的を果たせない場合であっても適用されます。 ８． 準拠法：諸条件は、抵触法の原則に関わらず、カリフォルニア州の法律に準拠するものとします。諸条件下において訴訟または法的手続が認められる場合、争うことを目的として、お客様およびDJIは、日本国の東京に所在する裁判所の排他的な対人管轄にしたがうことに同意するものとします。 ９． 一般条項：お客様の本製品利用に関して、諸条件および諸条件での言及によって明示的に盛り込まれているその他の同意は、お客様とDJI間で完全かつ排他的に了解され、合意されたものとします。上記で明示的に許容されない限り、諸条件は、権限を付与された諸条件の全当事者の権限を付与された代表者が署名した書面をもってのみ、修正することができます。諸条件もしくは諸条件下のお客様の権利の全部または一部は、法律の適用によってであろうと、他の事由によってであろうと、DJIによる事前の書面による承認無しで、譲渡または移転することは一切できません。当社は、いつでも、通知及び承認なく諸条件上の権利義務を譲渡することができます。条項の履行を義務付けない場合でも、それ以降のDJIによる履行を義務付ける権利の行使を妨げるものではありません。また、DJIが、諸条件あるいは諸条件の条項の違反、もしくは不履行を放棄することで、その後の違反または不履行の放棄、あるいは条項自体を放棄するというものではありません。諸条件の各条項の見出しの使用は便宜のためでしかなく、規定の解釈に影響を与えるものではありません。諸条件のいずれかの内容が無効もしくは、法的強制力が無い場合、その法的強制力の無い部分は最大限可能な範囲で効力を有するものとし、残りの部分の法的強制力はそのまま維持されるものとします。諸条件の有効期間満了後も、第1項および第3項から第10項は、プライバシーポリシーならびにその他付属する契約書とあわせて存続するものとします。 １０． 連絡先：本サービスは、〒518057中国深セン市南山区高新南四道18号スカイワースセミコンダクターデザインビルディング　ウエストウイング14階に事業本拠地を有するSZ DJI Technology Co., Ltd.およびその関連会社により提供されています。連絡する場合は、同住所へ書簡を、あるいはsupport@dji.comへeメールをお送りください。"
            },
            IAgree: {
                "zh-cn": "我已阅读",
                en: "I agree"
            },
            Reboot: {
                "zh-cn": "重启",
                en: "Reboot"
            },
            Rebooting: {
                "zh-cn": "设备重启中",
                en: "设备重启中"
            },
            dm_serial_lostconnect: {
                "zh-cn": "设备断连，正在连接中...",
                en: "设备断连，正在连接中..."
            },
            upload_data_remind1_data1: {
                "zh-cn": "GPS坐标",
                en: "GPS Coordinates"
            },
            upload_data_remind1_data2: {
                "zh-cn": "IP地址",
                en: "IP Address"
            },
            upload_data_remind1_data3: {
                "zh-cn": "产品序列号（SN码）",
                en: "Product Serial Number"
            },
            upload_data_remind1_data4: {
                "zh-cn": "视觉系统捕捉的视频和图像",
                en: "Videos and photos shot by the aircraft's Vision System"
            },
            flight_log_agree_clause: {
                "zh-cn": "我已阅读并同意<a data-href='http://www.dji.com/cn/policy?country_code=cn&lang=zh-CN' href='javascript:void(0)' class='dji-clearafocus'>《隐私权政策》</a>，并同意DJI使用我提交的数据。",
                en: "I agree to the <a data-href='http://www.dji.com/policy?country_code=us&lang=en' href='javascript:void(0)' class='dji-clearafocus'>Privacy Policy</a> and authorize DJI to read and use the data submitted."
            },
            privacy_policy: {
                "zh-cn": "《隐私权政策》",
                en: "Privacy Policy"
            },
            terms_of_use: {
                "zh-cn": "《用户协议》",
                en: "Terms Of Use"
            },
            general: {
                "zh-cn": "通用",
                en: "通用"
            }
        }
    }
});