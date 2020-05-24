let photo1 = {
    photo: '/alternative/20191001_163120.jpg',
    title: '1',
    description: 'első'
};

let photo2 = {
    photo: '/alternative/20191014_070829.jpg',
    title: '2',
    description: 'második'
};

let photo3 = {
    photo: '/alternative/20200218_202739.jpg',
    title: '3',
    description: 'harmadik'
};

let photo4 = {
    photo: '/alternative/20200303_224610.jpg',
    title: '4',
    description: 'negyedik'
};

let photo5 = {
    photo: '/alternative/20200307_132514.jpg',
    title: '5',
    description: 'ötödik'
};

let imagesData = [photo1,photo2,photo3,photo4,photo5];

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
}

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
    if(currentPhoto == (imagesData.length-1)) {
        currentPhoto = 0;
    } else {
        currentPhoto++;
    };
    loadPhoto(currentPhoto);
})

$('#left-arrow').click(() => {
    if(currentPhoto == 0) {
        currentPhoto = imagesData.length -1;
    } else {
        currentPhoto--;
    };
    loadPhoto(currentPhoto);
})
