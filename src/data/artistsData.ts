import { Artist } from '../types';

export const ARTISTS_DATA: Record<string, Artist> = {
  yoasobi: {
    id: 'yoasobi',
    name: 'YOASOBI',
    nameJp: '夜遊び / ヨアソビ',
    romajiName: 'YOASOBI',
    titleTag: 'Novel into Music Duo (小説を音楽にするユニット)',
    genre: ['J-Pop', 'Electropop', 'Anisong', 'Synth-pop'],
    activeYears: '2019 – Present',
    origin: 'Tokyo, Japan',
    label: 'Sony Music Entertainment Japan',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#2563eb', // Electric Indigo/Blue
    accentBadgeClass: 'bg-primary text-white',
    quote: '“Turning novels and short stories into vibrant, unforgettable pop music.”',
    shortBio: 'ดูโอสไตล์ J-Pop แห่งยุคที่โด่งดังจากการนำนิยายขนาดสั้นมาแต่งเป็นบทเพลง ผสมผสานบีทอิเล็กทรอนิกส์อันทรงพลังและเสียงร้องอันไพเราะของ ikura',
    biography: [
      'YOASOBI ก่อตั้งขึ้นในเดือนตุลาคม 2019 โดยโปรเจกต์ "monogatary.com" ของ Sony Music Japan ภายใต้คอนเซ็ปต์สุดแปลกใหม่คือ "การเปลี่ยนนิยายให้กลายเป็นเสียงดนตรี" (小説を音楽にするユニット)',
      'การจับคู่กันระหว่าง Ayase โปรดิวเซอร์เพลง Vocaloid ชื่อดังผู้มีทักษะในการเรียบเรียงทำนองที่ติดหูและจังหวะที่กระชับรวดเร็ว กับ ikura (Lilas Ikuta) นักร้อง-นักแต่งเพลงอะคูสติกที่มีพลังเสียงกังวานและถ่ายทอดอารมณ์ได้อย่างลึกซึ้ง ทำให้บทเพลงของ YOASOBI ประสบความสำเร็จอย่างถล่มทลายตั้งแต่ซิงเกิลแรก "Yoru ni Kakeru"',
      'ในปี 2023 เพลง "Idol" ซึ่งเป็นเพลงเปิดของอนิเมะเรื่อง Oshi no Ko (เกิดใหม่เป็นลูกโอชิ) ได้สร้างปรากฏการณ์ระดับโลกด้วยการขึ้นอันดับ 1 บนชาร์ต Billboard Global Excl. U.S. และมียอดสตรีมทะลุหลายร้อยล้านครั้งอย่างรวดเร็ว ทำให้พวกเขากลายเป็นหนึ่งในศิลปินระดับแนวหน้าของวงการ J-Pop ยุคปัจจุบัน'
    ],
    members: [
      {
        name: 'Ayase',
        nameJp: 'Ayase (アヤセ)',
        role: 'Composer, Lyricist, Keyboard & Producer',
        bioSnippet: 'อดีตโปรดิวเซอร์เพลงโวคาลอยด์ (Vocaloid) ผู้ประพันธ์เนื้อร้อง ทำนอง และมิกซ์เสียงเพลงทั้งหมดของวง'
      },
      {
        name: 'ikura (Lilas Ikuta)',
        nameJp: '幾田 りら (Ikuta Lilas)',
        role: 'Lead Vocalist & Acoustic Guitar',
        bioSnippet: 'นักร้องนำผู้มีเอกลักษณ์ด้านการออกเสียงที่ชัดเจน ไล่ระดับโน้ตได้อย่างแม่นยำ และมีผลงานเดี่ยวในนาม Lilas Ikuta'
      }
    ],
    keyFacts: [
      { label: 'เดบิวต์ (Debut)', value: 'ธันวาคม 2019 (ซิงเกิล Yoru ni Kakeru)' },
      { label: 'ต้นสังกัด (Label)', value: 'Sony Music Entertainment Japan' },
      { label: 'รางวัลเกียรติยศ', value: 'Billboard Japan Hot 100 #1, Japan Gold Disc Award' },
      { label: 'คอนเซ็ปต์หลัก', value: 'ดัดแปลงเนื้อเรื่องจากนิยาย (Novel to Music)' }
    ],
    songs: [
      {
        id: 'yoasobi-1',
        title: 'Yoru ni Kakeru',
        titleJp: '夜に駆ける (Racing into the Night)',
        releaseYear: 2019,
        type: 'Single',
        tieIn: 'สร้างจากนิยายสั้น "Thanatos no Yuuwaku" โดย Mayo Hoshino',
        personalNote: 'เพลงเดบิวต์ที่ทำให้ตกหลุมรักวงนี้ ท่อนฮุกติดหู จังหวะเปียโนและเบสมีความจัดจ้าน สื่ออารมณ์ความเหงาแต่เต็มไปด้วยพลัง',
        duration: '4:21'
      },
      {
        id: 'yoasobi-2',
        title: 'Idol',
        titleJp: 'アイドル',
        releaseYear: 2023,
        type: 'Theme Song',
        tieIn: 'เพลงเปิดอนิเมะ Oshi no Ko (เกิดใหม่เป็นลูกโอชิ)',
        personalNote: 'เพลงประวัติศาสตร์ J-Pop ที่มียอดวิวมหาศาล การร้องของ ikura ที่เปลี่ยนโทนเสียงหลากหลายอารมณ์ทำได้อย่างน่าทึ่ง',
        duration: '3:33'
      },
      {
        id: 'yoasobi-3',
        title: 'Gunjou',
        titleJp: '群青 (Blue)',
        releaseYear: 2020,
        type: 'Single',
        tieIn: 'ได้แรงบันดาลใจจากมังงะ Blue Period และโฆษณา Alfort',
        personalNote: 'เพลงที่ให้กำลังใจคนที่กำลังตามหาความฝัน ท่อนคอรัสประสานเสียงท้ายเพลงทรงพลังและอบอุ่นหัวใจมาก',
        duration: '4:08'
      },
      {
        id: 'yoasobi-4',
        title: 'Kaibutsu',
        titleJp: '怪物 (Monster)',
        releaseYear: 2021,
        type: 'Theme Song',
        tieIn: 'เพลงเปิดอนิเมะ BEASTARS ซีซัน 2',
        personalNote: 'เพลงโทนดาร์กที่มีจังหวะรวดเร็วหนักแน่น ผสมผสานความเป็นอิเล็กโทร-ร็อกที่แสดงด้านดุดันของวงได้อย่างยอดเยี่ยม',
        duration: '3:26'
      },
      {
        id: 'yoasobi-5',
        title: 'Yuusha',
        titleJp: '勇者 (The Brave)',
        releaseYear: 2023,
        type: 'Theme Song',
        tieIn: 'เพลงเปิดอนิเมะ Frieren: Beyond Journey\'s End (คำอธิษฐานในวันที่จากลา)',
        personalNote: 'เพลงเปิดที่ถ่ายทอดเรื่องราวการเดินทางของฟรีเรนได้อย่างซาบซึ้ง ดนตรีมีความแฟนตาซีและก้าวหน้าอย่างงดงาม',
        duration: '3:14'
      },
      {
        id: 'yoasobi-6',
        title: 'Tabun',
        titleJp: 'たぶん (Probably)',
        releaseYear: 2020,
        type: 'Single',
        tieIn: 'สร้างจากนิยายสั้นของ Shinano',
        personalNote: 'เพลงช้าฟังสบายสไตล์ Lo-fi R&B เหมาะกับการฟังในเช้าวันฝนตกหรือเวลาพักผ่อน',
        duration: '4:16'
      }
    ]
  },

  lisa: {
    id: 'lisa',
    name: 'LiSA',
    nameJp: '織部 里沙 / リサ',
    romajiName: 'LiSA (Risa Oribe)',
    titleTag: 'Rock Heroine & Anisong Queen (ロックの歌姫)',
    genre: ['J-Rock', 'Pop Punk', 'Anisong', 'Alternative Rock'],
    activeYears: '2010 – Present',
    origin: 'Seki, Gifu Prefecture, Japan',
    label: 'SACRA MUSIC / Sony Music Japan',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#e11d48', // Energetic Rose / Magenta
    accentBadgeClass: 'bg-danger text-white',
    quote: '“Singing with pure passion, igniting the fire in every listener’s heart.”',
    shortBio: 'ราชินีเพลงอนิเมะและร็อกเกอร์สาวพลังเสียงสะกดโลก เจ้าของบทเพลงยอดฮิตอมตะจาก Demon Slayer: Kimetsu no Yaiba และ Sword Art Online',
    biography: [
      'LiSA (ชื่อจริง Risa Oribe) เริ่มต้นเส้นทางสายดนตรีในฐานะนักร้องนำวงอินดี้ร็อก CHUCKY ก่อนจะได้ก้าวสู่เวทีระดับประเทศเมื่อได้รับเลือกให้พากย์เสียงร้องเพลงของ Yui ในวงสมมุติ "Girls Dead Monster" จากอนิเมะชื่อดัง Angel Beats! (2010)',
      'หลังจากเปิดตัวในฐานะศิลปินเดี่ยวในปี 2011 ด้วยมินิอัลบั้ม "Letters to U" LiSA ก็ได้สร้างชื่อเสียงอย่างต่อเนื่องด้วยการร้องเพลงประกอบอนิเมะระดับตำนาน เช่น Fate/Zero ("Oath Sign"), Sword Art Online ("Crossing Field", "Catch the Moment", "Shirushi")',
      'ในปี 2019-2020 LiSA ประสบความสำเร็จขั้นสูงสุดด้วยเพลง "Gurenge" และ "Homura" ประกอบภาพยนตร์ Demon Slayer: Mugen Train ซึ่งสร้างประวัติศาสตร์คว้ารางวัลชนะเลิศ Japan Record Awards และทำให้เธอเป็นหนึ่งในศิลปินหญิงเดี่ยวที่ยิ่งใหญ่ที่สุดของวงการเพลงญี่ปุ่นยุคใหม่'
    ],
    keyFacts: [
      { label: 'เปิดตัวเดี่ยว (Solo Debut)', value: 'เมษายน 2011 (มินิอัลบั้ม Letters to U)' },
      { label: 'สังกัด (Label)', value: 'SACRA MUSIC (Sony Music Labels)' },
      { label: 'รางวัลสูงสุด', value: 'Grand Prix - 62nd Japan Record Awards (Homura)' },
      { label: 'ฉายาในวงการ', value: 'Rock Heroine / ราชินีเพลงอนิซอง' }
    ],
    songs: [
      {
        id: 'lisa-1',
        title: 'Gurenge',
        titleJp: '紅蓮華 (Red Lotus)',
        releaseYear: 2019,
        type: 'Theme Song',
        tieIn: 'เพลงเปิดอนิเมะ Demon Slayer: Kimetsu no Yaiba Season 1',
        personalNote: 'เพลงร็อกระดับปรากฏการณ์ที่เปี่ยมไปด้วยพลัง ท่อนไฮโน้ตแสดงพลังเสียงที่ทรงพลังของ LiSA ได้อย่างสมบูรณ์แบบ',
        duration: '3:58'
      },
      {
        id: 'lisa-2',
        title: 'Homura',
        titleJp: '炎 (Flame)',
        releaseYear: 2020,
        type: 'Theme Song',
        tieIn: 'เพลงประกอบภาพยนตร์ Demon Slayer: Mugen Train',
        personalNote: 'บัลลาดร็อกที่กินใจและเต็มไปด้วยหยาดน้ำตา ได้รับรางวัลเกียรติยศสูงสุด Japan Record Award ประจำปี 2020',
        duration: '4:35'
      },
      {
        id: 'lisa-3',
        title: 'Crossing Field',
        titleJp: 'Crossing Field',
        releaseYear: 2012,
        type: 'Theme Song',
        tieIn: 'เพลงเปิดอนิเมะ Sword Art Online (Aincrad Arc)',
        personalNote: 'เพลงเปิดตัวที่ทำให้แฟนอนิเมะทั่วโลกเริ่มรู้จัก LiSA กีตาร์ริฟฟ์และเมโลดี้สดใสสะท้อนความกล้าหาญของการผจญภัย',
        duration: '4:09'
      },
      {
        id: 'lisa-4',
        title: 'Catch the Moment',
        titleJp: 'Catch the Moment',
        releaseYear: 2017,
        type: 'Theme Song',
        tieIn: 'เพลงประกอบภาพยนตร์อนิเมะ Sword Art Online: Ordinal Scale',
        personalNote: 'หนึ่งในเพลงที่ร้องตามในคอนเสิร์ตได้สนุกที่สุด เนื้อหาพูดถึงการไขว่คว้าช่วงเวลาปัจจุบันร่วมกับคนสำคัญ',
        duration: '4:42'
      },
      {
        id: 'lisa-5',
        title: 'Oath Sign',
        titleJp: 'Oath Sign',
        releaseYear: 2011,
        type: 'Theme Song',
        tieIn: 'เพลงเปิดอนิเมะ Fate/Zero ซีซัน 1',
        personalNote: 'ซิงเกิลเปิดตัวเดบิวต์อย่างเป็นทางการ ประพันธ์โดย Sho Watanabe ดนตรีอลังการเข้ากับธีมสงครามจอกศักดิ์สิทธิ์',
        duration: '4:11'
      },
      {
        id: 'lisa-6',
        title: 'Shirushi',
        titleJp: 'シルシ (Proof)',
        releaseYear: 2014,
        type: 'Theme Song',
        tieIn: 'เพลงปิดอนิเมะ Sword Art Online II (Mother\'s Rosario Arc)',
        personalNote: 'เพลงช้าที่สะเทือนอารมณ์มากที่สุดของ LiSA บันทึกความทรงจำและความผูกพันที่ไม่มีวันจางหาย',
        duration: '4:47'
      }
    ]
  },

  'back-number': {
    id: 'back-number',
    name: 'back number',
    nameJp: 'バックナンバー',
    romajiName: 'back number',
    titleTag: '3-Piece Melodic & Emotional J-Rock Band (3ピースロックバンド)',
    genre: ['J-Rock', 'Pop Rock', 'Indie Rock', 'Ballad'],
    activeYears: '2004 – Present (Major: 2011)',
    origin: 'Ota, Gunma Prefecture, Japan',
    label: 'Universal Sigma / Universal Music Japan',
    imageUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#d97706', // Warm Amber / Vintage Orange
    accentBadgeClass: 'bg-warning text-dark',
    quote: '“Singing the tender, unrequited love and poignant truths of ordinary life.”',
    shortBio: 'วงร็อกทรีพีซเจ้าพ่อเพลงอกหักและเพลงรักแอบชอบแห่งประเทศญี่ปุ่น กับเนื้อร้องที่สัมผัสหัวใจผู้ฟังทุกเจเนอเรชัน',
    biography: [
      'back number ก่อตั้งวงในปี 2004 ที่จังหวัดกุมมะ โดยมี อิโยริ ชิมิสึ (Iyori Shimizu) เป็นผู้ริเริ่ม ชื่อวง "back number" มีที่มาจากความรู้สึกส่วนตัวของชิมิสึที่แฟนเก่าทิ้งไปคบกับหนุ่มนักดนตรีคนอื่น ทำให้เขารู้สึกว่าตนเองกลายเป็นเหมือน "นิตยสารฉบับเก่าที่ไม่มีใครสนใจ (Back Number)"',
      'เอกลักษณ์ที่โดดเด่นที่สุดของวงคือ การเขียนเนื้อเพลงที่ตรงไปตรงมา สะท้อนความรู้สึกของคนธรรมดา ความไม่สมหวังในความรัก และความประหม่าของคนที่แอบรักใครสักคน ซึ่งทำให้ผู้ฟังทั่วญี่ปุ่นรู้สึกเชื่อมโยงและเข้าถึงได้อย่างลึกซึ้ง',
      'ด้วยผลงานเพลงระดับตำนานอย่าง "Christmas Song", "Takane no Hanako-san", "Happy End" และ "Suiheisen" ทำให้ back number ก้าวขึ้นสู่ตำแหน่งวงดนตรีร็อกระดับแถวหน้าของญี่ปุ่นที่จัดคอนเสิร์ตโดมทัวร์ทั่วประเทศและมียอดสตรีมถล่มทลายอย่างต่อเนื่อง'
    ],
    members: [
      {
        name: 'Iyori Shimizu',
        nameJp: '清水 依与吏 (Shimizu Iyori)',
        role: 'Lead Vocals, Guitar, Songwriter & Composer',
        bioSnippet: 'หัวหน้าวงผู้แต่งเนื้อร้องและทำนองเพลงทั้งหมด น้ำเสียงอบอุ่นและมีเอกลักษณ์ในการเล่าเรื่องความรัก'
      },
      {
        name: 'Kazuya Kojima',
        nameJp: '小島 和也 (Kojima Kazuya)',
        role: 'Bass Guitar & Backing Vocals',
        bioSnippet: 'มือเบสผู้ควบคุมจังหวะและคุมโทนความนุ่มนวลของภาคดนตรีทั้งหมดของวง'
      },
      {
        name: 'Hisashi Kurihara',
        nameJp: '栗原 寿 (Kurihara Hisashi)',
        role: 'Drums & Percussion',
        bioSnippet: 'มือกลองผู้สร้างไดนามิกและจังหวะกลองที่เปี่ยมด้วยความรู้สึกและพลัง'
      }
    ],
    keyFacts: [
      { label: 'ก่อตั้งวง (Formed)', value: 'ปี 2004 (เมเจอร์เดบิวต์ เมษายน 2011)' },
      { label: 'จังหวัดต้นกำเนิด', value: 'กุมมะ (Gunma Prefecture, Japan)' },
      { label: 'สังกัด (Label)', value: 'Universal Sigma / Universal Music Japan' },
      { label: 'ผลงานเพลงฮิตประจำชาติ', value: 'Christmas Song (เพลงคริสต์มาสยอดนิยมตลอดกาล)' }
    ],
    songs: [
      {
        id: 'bn-1',
        title: 'Christmas Song',
        titleJp: 'クリスマスソング',
        releaseYear: 2015,
        type: 'Theme Song',
        tieIn: 'เพลงประกอบซีรีส์ Fuji TV เรื่อง "5→9 From Five to Nine" (5→9～私に恋したお坊さん～)',
        personalNote: 'เพลงประจำเทศกาลฤดูหนาวที่เปิดทั่วญี่ปุ่นทุกปี เมโลดี้อบอุ่นและเสียงระฆังผสมผสานความโรแมนติกกับความเหงาได้อย่างลงตัว',
        duration: '5:41'
      },
      {
        id: 'bn-2',
        title: 'Takane no Hanako-san',
        titleJp: '高嶺の花子さん (Flower on a High Peak)',
        releaseYear: 2013,
        type: 'Single',
        tieIn: 'ซิงเกิลยอดฮิตของวงที่ได้รับความนิยมในหมู่วัยรุ่นและงานเทศกาลฤดูร้อน',
        personalNote: 'จังหวะเพลงเร็วสนุกสนาน เนื้อเพลงพูดถึงการแอบชอบคนที่อยู่สูงเกินเอื้อม เป็นเพลงที่ฟังแล้วสดชื่นและยิ้มตามได้เสมอ',
        duration: '4:55'
      },
      {
        id: 'bn-3',
        title: 'Happy End',
        titleJp: 'ハッピーエンド',
        releaseYear: 2016,
        type: 'Theme Song',
        tieIn: 'เพลงประกอบภาพยนตร์โรแมนติกแฟนตาซี "My Tomorrow, Your Yesterday" (พรุ่งนี้ผมจะเดตกับเธอคนเมื่อวาน)',
        personalNote: 'เพลงบัลลาดสุดซึ้งที่เล่ามุมมองของคนที่ต้องบอกลาทั้งที่ยังรักอยู่ เป็นหนึ่งในเพลงที่ฟังแล้วน้ำตาซึมที่สุด',
        duration: '5:15'
      },
      {
        id: 'bn-4',
        title: 'Suiheisen',
        titleJp: '水平線 (Horizon)',
        releaseYear: 2020,
        type: 'Single',
        tieIn: 'แต่งขึ้นเพื่อเป็นกำลังใจให้นักเรียนมัธยมที่การแข่งขันกีฬา Inter-High 2020 ถูกยกเลิก',
        personalNote: 'เพลงที่เยียวยาจิตใจผู้คนในช่วงเวลาที่ยากลำบาก มียอดวิวกว่า 200 ล้านวิวบน YouTube และได้รับความรักอย่างล้นหลาม',
        duration: '4:48'
      },
      {
        id: 'bn-5',
        title: 'Heroine',
        titleJp: 'ヒロイン (Heroine)',
        releaseYear: 2015,
        type: 'Single',
        tieIn: 'เพลงประกอบโฆษณา JR SKISKI ประจำฤดูหนาว 2014-2015',
        personalNote: 'เพลงรักฤดูหนาวที่มีฉากหลังเป็นหิมะโปรยปราย ถ่ายทอดความปรารถนาที่จะอยู่เคียงข้างคนที่รักได้อย่างงดงาม',
        duration: '4:30'
      },
      {
        id: 'bn-6',
        title: 'I Love You',
        titleJp: 'アイラブユー',
        releaseYear: 2022,
        type: 'Theme Song',
        tieIn: 'เพลงประกอบละครเช้า NHK เรื่อง "Maiagare!" (舞いあがれ！)',
        personalNote: 'บทเพลงที่สดใส เปี่ยมด้วยความหวังและความรักอันบริสุทธิ์เหมือนสายลมที่ช่วยพยุงปีกให้บินขึ้นสู่ท้องฟ้า',
        duration: '3:57'
      }
    ]
  },

  'luna-haruna': {
    id: 'luna-haruna',
    name: 'Luna Haruna',
    nameJp: '春奈 るな',
    romajiName: 'Haruna Runa',
    titleTag: 'Crystalline Voice & Kawaii Anisong Princess (アニソン・シンガー)',
    genre: ['J-Pop', 'Anisong', 'Kawaii Pop', 'Gothic Lolita Pop'],
    activeYears: '2011 – Present',
    origin: 'Tokyo, Japan',
    label: 'SACRA MUSIC / Sony Music Japan',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#0284c7', // Sky Blue / Cyan Pastel
    accentBadgeClass: 'bg-info text-dark',
    quote: '“Spreading fairy-tale melodies and bright, heartfelt smiles through music.”',
    shortBio: 'ศิลปินสาวเสียงใสดุจคริสตัลและนางแบบนิตยสาร KERA ผู้ผสมผสานแฟชั่นโลลิต้ากับบทเพลงอนิเมะชื่อดังอย่าง Sword Art Online และ Saekano',
    biography: [
      'Luna Haruna (ฮารุนะ รูนะ) มีความหลงใหลในวัฒนธรรมอนิเมะและเพลงอนิซองตั้งแต่เด็ก เธอเริ่มเข้าสู่วงการผ่านการเป็นนางแบบนิตยสารแฟชั่นชื่อดัง KERA และเข้ารอบสุดท้ายในการประกวดร้องเพลง Animax Anison Grand Prix ครั้งที่ 4',
      'ในปี 2012 เธอได้เปิดตัวในฐานะนักร้องอย่างเป็นทางการด้วยเพลง "Sora wa Takaku Kaze wa Utau" ซึ่งประพันธ์โดย ยูกิ คาจิอุระ (Yuki Kajiura) ใช้เป็นเพลงปิดของอนิเมะฟอร์มยักษ์ Fate/Zero ซีซัน 2 ซึ่งสร้างความประทับใจให้แก่แฟนเพลงในทันที',
      'ต่อมาชื่อของ Luna Haruna ได้กลายเป็นที่จดจำอย่างกว้างขวางในฐานะผู้ขับร้องเพลงประกอบซีรีส์ยอดฮิต Sword Art Online ทั้งเพลง "Overfly" และ "Startear" รวมถึงเพลงเปิดสุดน่ารักของเรื่อง Saekano: How to Raise a Boring Girlfriend ("Kimiiro Signal", "Stella Breeze") ด้วยเสียงร้องที่ใสกระจ่าง สไตล์การแต่งตัวที่น่ารักสดใส และความจริงใจในทุกบทเพลง'
    ],
    keyFacts: [
      { label: 'เดบิวต์ (Debut)', value: 'พฤษภาคม 2012 (ซิงเกิล Sora wa Takaku Kaze wa Utau)' },
      { label: 'สังกัด (Label)', value: 'SACRA MUSIC (Sony Music Entertainment Japan)' },
      { label: 'เอกลักษณ์เฉพาะตัว', value: 'แฟชั่นสไตล์ Gothic & Lolita และเสียงร้องใสดุจแก้ว' },
      { label: 'ผลงานที่เป็นที่รู้จัก', value: 'เพลงประกอบซีรีส์ Sword Art Online และ Saekano' }
    ],
    songs: [
      {
        id: 'luna-1',
        title: 'Overfly',
        titleJp: 'Overfly',
        releaseYear: 2012,
        type: 'Theme Song',
        tieIn: 'เพลงปิดอนิเมะ Sword Art Online (Fairy Dance Arc)',
        personalNote: 'เพลงระดับตำนานที่แฟน SAO ทุกคนต้องรู้จัก เมโลดี้ที่ทะยานขึ้นในท่อนฮุกและเสียงร้องใสบริสุทธิ์เข้ากับโลกของ ALfheim Online ได้อย่างลงตัว',
        duration: '4:30'
      },
      {
        id: 'luna-2',
        title: 'Startear',
        titleJp: 'Startear',
        releaseYear: 2014,
        type: 'Theme Song',
        tieIn: 'เพลงปิดอนิเมะ Sword Art Online II (Phantom Bullet Arc)',
        personalNote: 'บทเพลงที่สะท้อนความเจ็บปวดและความหวังของตัวละคร Sinon ท่อนบริดจ์และคอรัสซึ้งกินใจมาก',
        duration: '5:02'
      },
      {
        id: 'luna-3',
        title: 'Kimiiro Signal',
        titleJp: '君色シグナル (Your Color Signal)',
        releaseYear: 2015,
        type: 'Theme Song',
        tieIn: 'เพลงเปิดอนิเมะ Saekano: How to Raise a Boring Girlfriend ซีซัน 1',
        personalNote: 'เพลงป็อปที่สดใสและน่ารักขั้นสุด จังหวะสนุก ชวนให้รู้สึกสดชื่นและกระปรี้กระเปร่าทันทีที่กดฟัง',
        duration: '4:44'
      },
      {
        id: 'luna-4',
        title: 'Stella Breeze',
        titleJp: 'ステラブリーズ (Stella Breeze)',
        releaseYear: 2017,
        type: 'Theme Song',
        tieIn: 'เพลงเปิดอนิเมะ Saekano: How to Raise a Boring Girlfriend .♭ ซีซัน 2',
        personalNote: 'เพลงที่ Luna Haruna ร่วมเขียนเนื้อร้องด้วยตนเอง แสดงถึงความผูกพันและการก้าวไปข้างหน้าร่วมกับเพื่อนๆ',
        duration: '4:06'
      },
      {
        id: 'luna-5',
        title: 'Sora wa Takaku Kaze wa Utau',
        titleJp: '空は高く風は歌う (The Sky is High and the Wind Sings)',
        releaseYear: 2012,
        type: 'Theme Song',
        tieIn: 'เพลงปิดอนิเมะ Fate/Zero ซีซัน 2 (ประพันธ์โดย Yuki Kajiura)',
        personalNote: 'ผลงานเดบิวต์ชิ้นเอก การเรียบเรียงดนตรีออเคสตราสุดอลังการและเสียงร้องที่บริสุทธิ์น่าเกรงขาม',
        duration: '4:32'
      },
      {
        id: 'luna-6',
        title: 'Ripple Effect',
        titleJp: 'Ripple Effect',
        releaseYear: 2016,
        type: 'Theme Song',
        tieIn: 'เพลงปิดอนิเมะ High School Fleet (Haifuri)',
        personalNote: 'เพลงสดใสธีมท้องทะเลและมิตรภาพที่แต่งโดย ZAQ จังหวะกระฉับกระเฉงและติดหูง่าย',
        duration: '4:03'
      }
    ]
  }
};

export const ARTIST_LIST: Artist[] = [
  ARTISTS_DATA.yoasobi,
  ARTISTS_DATA.lisa,
  ARTISTS_DATA['back-number'],
  ARTISTS_DATA['luna-haruna'],
];
