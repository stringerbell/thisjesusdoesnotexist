import React, { useState, useEffect } from 'react';
const list = [
  '1_-1rEWrs06-CZ8ptov9LaXQ.jpeg',
  '2-621343.jpg',
  '57ZKMSFBCQZKLG7N75ZIG2YKXE.JPG',
  '91l34h1Dd1L._SX425_.jpg',
  '170px-Pietro_Perugino_040.jpg',
  '220px-Christ,_by_Heinrich_Hofmann.jpg',
  '220px-Leonardo_da_Vinci,_Salvator_Mundi,_c.1500,_oil_on_walnut,_45.4_×_65.6_cm.jpg',
  '2157.jpg',
  '38922-disciples-1200.1200w.tn.jpg',
  '53287-jesus-garden-2-1200.1200w.tn.jpg',
  '57807-5671120405_96ab13f7b5_o.800w.tn.jpg',
  '61030-jesus-painting-wral-fox-news.1200w.tn.jpg',
  '68798.jpg',
  '81994.jpg',
  '180312-jesus-disfigured-book-index.jpg',
  '1437465.jpg',
  '502012495_univ_lsr_xl.jpg',
  '502014285_univ_sqr_xl.jpg',
  '_87356796_jesustopthinkstock.jpg',
  'Almeida_Júnior_-_Batismo_de_Jesus,_1895.JPG',
  'ascension.jpg',
  'b71bff02fa278ea2d022d927bcecaf8f.jpg',
  'bible-jesus-726549.jpg',
  'Blessing.jpeg',
  'c496b0c32bedc62fb251c4f14ac4cb6b.jpg',
  'Cefalù_Pantocrator_retouched.jpg',
  'Christ_of_the_Cornfield.jpg',
  'd190fc459a8a8d67eb0c840caf555aba--jesus-art-jesus-christ.jpg',
  'download.jpeg',
  'Easter-2018-Jesus-Christ-693068.jpg',
  'f1177521b55c1d062b2797a2cbb357fb--jesus-pictures-bible-pictures.jpg',
  'GoodFriday.jpeg',
  'Hyla blue largposter copy.jpg',
  'image-20160324-17857-1ix4a7p.jpg',
  'images.jpeg',
  'images (1).jpeg',
  'images (2).jpeg',
  'images (3).jpeg',
  'images (4).jpeg',
  'jesus.jpg',
  'Jesus (1).jpg',
  'jesus8.jpg',
  'jesus-1-638x500.jpg',
  'jesus-2.jpg',
  'jesus-christ.jpg',
  'Jesus-holds-lamb.gif',
  'jesus-internal.jpg',
  'Jesus-Of-Nazareth.jpg',
  'Jesus-Of-Nazareth-Photos-from-the-Movie-Jesus-played-by-Robert-Powell-jesus-23779887-640-480.jpg',
  'Jesus-Portriat-Smiling.jpg',
  'jesus-rembrandt-paintingjpg.jpg',
  'jesus-sacred-heart.jpg',
  'Jesus_of_nazareth.jpg',
  'jesuschrist.jpg',
  'JesusChristGettyImages-600166818-5a4e7131eb4d520037d96847.jpg',
  'jesuschristredrobe_large.jpg',
  'jesussecondcoming.jpg',
  'Lord-Jesus.jpg',
  'maxresdefault.jpg',
  'MBD64Y3-_400x400.jpg',
  'merciful-jesus.jpg',
  'painting-picture-image-jesus-christ-love.jpg',
  'precious-bloodsh1c.jpg',
  'Real-life-experience-of-a-‘Jesus-moment’.jpg',
  'sacred-heart.jpg',
  'Savior.jpeg',
  'shutterstock_186707744.jpg',
  'son-of-god-white-jesus-1.jpg',
  'teachings-of-Jesus-og.jpg',
  'Trinity1.jpg',
  'unnamed.jpg',
  'unnamed2.jpg',
  'white-jesus.jpg',
  'Why-is-Jesus-Christ-Important-in-My-Life-main-1138511.jpg',
  'www-St-Takla-org___Holy-Face-of-Jesus-22.jpg',
  'youtube-jesus-christ-denies-bizarre-sexual-misconduct-allegations-pewdiepie-abuse.jpg',
  'white-jesus-black-coffee.jpeg'
];

const RandomJesus = () => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    import(`./jesuses/${list[Math.floor(Math.random() * list.length)]}`).then(
      module => setImage(module.default)
    );
  }, []);
  if (image) {
    return <img src={image} alt={'this white jesus does not exist'} />;
  }
  return null;
};

export default RandomJesus;
