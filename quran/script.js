const verses = [

    "وَلَا تَهْنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ",
    "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    "وَلَا تَهْنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ",
    "فَإِذَا قَضَيْتُمُ الصَّلَاةَ فَاذْكُرُوا اللَّهَ قِيَامًا وَقُعُودًا وَعَلَى جُنُوبِكُمْ ۚ فَإِذَا اطْمَأْنَنتُمْ فَأَقِيمُوا الصَّلَاةَ ۚ إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا * وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ",
    "قُلْ يَا عِبَادِيَ الَّذِينَ آمَنُوا اتَّقُوا رَبَّكُمْ ۖ لِلَّذِينَ أَحْسَنُوا فِي هَـذِهِ الدُّنْيَا حَسَنَةٌ ۖ وَأَرْضُ اللَّهِ وَاسِعَةٌ ۖ إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ",
    "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا",
    "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ سَتَجْعَلُ لَهُمُ الرَّحْمَانُ وُدًّا",
    "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا * إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    "فَمَن يَعْمَل مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ * وَمَن يَعْمَل مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ",
    "هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ",
    "اللَّهُ يَجْتَبِي إِلَيْهِ مَن يَشَاءُ",
    "وَقَالَ رَبُّكُمْ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    "قُلْ يَا عِبَادِي الَّذِينَ آمَنُوا اتَّقُوا رَبَّكُمْ",
    "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ",
    "يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَّصُوحًا",
    "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا",
    "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    "وَوَجَدَكَ ضَالًّا فَهَدَى",
    "وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ",
    "قَد أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ",
    "قُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ ۚ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا",
    "إِلَّا مَن تَابَ وَآمَنَ وَعَمِلَ عَمَلًا صَالِحًا فَأُو۟لَـٰئِكَ يَدْخُلُونَ الْجَنَّةَ",
    "وَقُل رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
    "قَالَ لَا تَخَافَا ۖ إِنَّنِي مَعَكُمَا أَسْمَعُ وَأَرَى",
    "إِنَّمَا يُؤْمِنُ بِآيَاتِنَا الَّذِينَ إِذَا ذُكِّرُوا بِهَا خَرُّوا سُجَّدًا وَسَبَّحُوا بِحَمْدِ رَبِّهِمْ",
    "وَاصْبِرْ نَفْسَكَ مَعَ الْذِينَ يَدْعُونَ رَبَّهُمْ",
    "مَن عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَى وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
    "إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ",
    "يَا أَيُّهَا الَّذِينَ آمَنُوا أُذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا",
    "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا ۚ هُوَ مَوْلَانَا ۖ وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
    "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
    "وَمَن يُطِعِ اللَّهَ وَالرَّسُولَ فَأُولَـٰئِكَ مَعَ الَّذِينَ أَنْعَمَ اللَّهُ عَلَيْهِم مِّنَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ وَالصَّالِحِينَ ۚ وَحَسُنَ أُولَـٰئِكَ رَفِيقًا",
    "وَإِن يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ ۖ وَإِن يُرِدْكَ بِخَيْرٍ فَلَا رَادَّ لِفَضْلِهِ",
    "وَلَا تَسْعَوْا فِي الْأَرْضِ فَسَادًا ۖ وَأَحْسِنُوا إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ",
    "وَلا تَحْزَنْ عَلَيْهِمْ وَلَا تَكُ فِي ضَيْقٍ مِّمَّا يَمْكُرُونَ",
    "مَن عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَى وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
    "إِلَّا مَن تَابَ وَآمَنَ وَعَمِلَ عَمَلًا صَالِحًا فَأُو۟لَـٰئِكَ يَدْخُلُونَ الْجَنَّةَ وَلَا يُظْلَمُونَ شَيْئًا"

]

function getVerse() {

    const size = verses.length;

    const randomIndex = Math.floor(Math.random() * size);

    return verses[randomIndex];

}

function openCard(content) {
    document.getElementById('card-text').innerText = " { " + getVerse() + " } ";
    document.getElementById('modal').style.display = 'flex';
}

function closeCard() {
    document.getElementById('modal').style.display = 'none';
}