var lnz = {
texture:[
'0',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9',
'10',
'11',
'12',
'13',
'14',
'15',
'16',
'17',
'18'
],
birdbrain: 0,
fishbrain: 0,
dogbrain:0,
catbrain:0,
  ballzInfo:[
    ['transparent', 5,0,0,0,2,'#000000',16,0],//chest 0
    ['#ffc200', 15,0,15,10,-1,'#000000',16,0],//neck 1
    ['#ffc200', 10,0,20,0,-1,'#000000',16,0],//head 2
    ['#fff2c7', 10,0,16,0,0,'#000000',16,0],//snout 3
    ['#fff', 3,0,18,0,0,'#000000',18,2],//jowl r 4
    ['#fff', 3,0,18,0,1,'#000000',18,2],//jowl l 5
    ['#fff2c7', 0,0,20,0,-1,'#000000',16,0],
    ['#fff', 3,0,20,0,-1,'#000000',18,2],
    ['black', 0,0,20,-5,0,'#000000',0,-1],
    ['#ffc200', 0,0,5,0,-1,'#000000',16,0],
    ['#ffc200', 0,0,0,0,-1,'#000000','16',0],
    ['#ffc200', 5,10,0,0,1,'#0f0f0f',16,0],
    ['#ffc200', 5,-10,0,0,0,'#0f0f0f',16,0],
    ['#ffe38a', 5,10,0,0,0,'#000000',17,1],
    ['#ffe38a', 5,-10,0,0,1,'#000000',17,1],
    ['#ffffff', 5,10,0,0,0,'#000000',18,2],
    ['#ffffff', 5,-10,0,0,1,'#000000',18,2],
    ['#00191c', 5,0,0,0,0,'#000000',16,0],
    ['#00191c', 5,0,0,0,1,'#000000',16,0],
    ['#ffe799', 5,0,0,0,1,'#000000',17,1],
    ['#ffe799', 5,0,0,0,0,'#000000',17,1],
    ['#ffe799', 5,0,0,0,0,'#000000',18,2],
    ['#ffe799', 5,0,0,0,1,'#000000',18,2],
    ['#fff', 5,0,0,0,0,'#000000',18,2],
    ['#fff', 5,0,0,0,1,'#000000',18,2],
    ['#fff', 0,0,0,0,0,'#000000',16,0],//tail25
    ['#ff8400', 5,0,20,0,0,'#000000',17,1],//tail
    ['#fff', 10,0,40,0,5,'#000000',18,2],//tail
    ['#ff8400', 7,0,60,10,0,'#000000',17,1],//tail
    ['#00c8e3', 5,0,80,20,0,'#000000',18,2],//tail29
    ['#000000', -5,-7,20,0,-1,'#000000',10,-1],
    ['#000000', -5,7,20,0,-1,'#000000',10,-1],
    ['#000000', -5,-7,20,0,0,'#000000',0,-1],
    ['#000000', -5,7,20,0,0,'#000000',0,-1],
    ['#ff8400', -15,7,7,0,1,'#000000',17,1],
    ['#ff8400', -15,-7,7,0,0,'#000000',17,1],
    ['#ff8400', -5,-5,24,0,1,'#000000',17,1],
    ['#ff8400', -5,5,24,0,0,'#000000',17,1],
],
  linez:[
    [25,26,'#fff'],
    [26,27,'#fff'],
    [27,28,'#fff'],
    [28,29,'#fff'],
    [34,36,'#fff'],
    [35,37,'#fff'],
    [11,13,'#fff'],
    [12,14,'#fff'],
    [13,15,'#fff'],
    [14,16,'#fff'],
    [17,19,'#fff'],
    [18,20,'#fff'],
    [19,21,'#fff'],
    [20,22,'#fff'],
    [21,23,'#fff'],
    [22,24,'#fff'],
    [0,1,'#00191c'],
    [1,2,'#00191c'],
    [2,3,'#00191c'],
    [3,4,'#0097ab'],
    [3,5,'#0097ab'],
    [6,7,'#0097ab'],
    [0,9,'#00191c'],
    [9,10,'#00191c'],
[25,9,'black'],
    [63,36,'#00191c'],
    [64,36,'#00191c'],
    [65,37,'#00191c'],
    [66,37,'#00191c'],
//addballz
    [69,8,'#00191c'],
    [70,8,'#00191c'],
    [71,4,'#00191c'],
    [73,71,'#00191c'],
    [72,5,'#00191c'],
    [74,72,'#00191c'],
    [67,7,'#00191c'],
    [68,7,'#00191c'],
//strikes
[75,76,'#00191c'],
    [75,77,'#00191c'],
[78,79,'#00191c'],
    [78,80,'#00191c'],
        ],
  addBallz:[
//paws, paws and paws! cute paws
[15,-5,5,-7,'#fff',15,1,'#000000',-1,2],
[15,0,5,-10,'#fff',15,1,'#000000',-1,2],
[15,5,5,-7,'#fff',15,1,'#000000',-1,2],
[15,-7,8,-12,'#000000',5,1,'#000000',-1,-1],
[15,0,8,-15,'#000000',5,1,'#000000',-1,-1],
[15,7,8,-12,'#000000',5,1,'#000000',-1,-1],
//
[16,-5,5,-7,'#fff',15,0,'#000000',-1,2],
[16,0,5,-10,'#fff',15,0,'#000000',-1,2],
[16,5,5,-7,'#fff',15,0,'#000000',-1,2],
[16,-7,8,-12,'#000000',5,0,'#000000',-1,-1],
[16,0,8,-15,'#000000',5,0,'#000000',-1,-1],
[16,7,8,-12,'#000000',5,0,'#000000',-1,-1],
//
[23,-5,5,-7,'#fff',15,1,'#000000',-1,2],
[23,0,5,-10,'#fff',15,1,'#000000',-1,2],
[23,5,5,-7,'#fff',15,1,'#000000',-1,2],
[23,-7,8,-12,'#000000',5,1,'#000000',-1,-1],
[23,0,8,-15,'#000000',5,1,'#000000',-1,-1],
[23,7,8,-12,'#000000',5,1,'#000000',-1,-1],
//
[24,-5,5,-7,'#fff',15,0,'#000000',-1,2],
[24,0,5,-10,'#fff',15,0,'#000000',-1,2],
[24,5,5,-7,'#fff',15,0,'#000000',-1,2],
[24,-7,8,-12,'#000000',5,0,'#000000',-1,-1],
[24,0,8,-15,'#000000',5,0,'#000000',-1,-1],
[24,7,8,-12,'#000000',5,0,'#000000',-1,-1],
//ear
[34,-10,5,0,'#ff8400',10,-1,'#000000',17,1],
[34,-7,3,5,'#ff8400',10,-1,'#000000',17,1],
[35,10,5,0,'#ff8400',10,-1,'#000000',17,1],
[35,7,3,5,'#ff8400',10,-1,'#000000',17,1],
//eyes
//cheeks!
[2,-22,10,-5,'#fff',22,1,'#fff',18,2],
[2,22,10,-5,'#fff',22,0,'#fff',18,2],
//70
[8,-10,-3,0,'#000',3,-1,'#000',-1,-1],
[8,10,-3,0,'#000',3,-1,'#000',-1,-1],
[4,5,15,0,'#fffcf5',10,-1,'#000',-1,-1],
[5,-5,15,0,'#fffcf5',10,-1,'#000',-1,-1],
[4,5,30,0,'#fffcf5',3,-1,'#000',-1,-1],
[5,-5,30,0,'#fffcf5',3,-1,'#000',-1,-1],
//strikes75
[0,0,-30,0,'#000',20,-1,'#000',17,1],
[0,-27,-20,0,'#000',10,-1,'#000',17,1],
[0,27,-20,0,'#000',10,-1,'#000',17,1],
[9,0,-25,0,'#000',20,-1,'#000',17,1],
[9,-22,-20,0,'#000',10,-1,'#000',17,1],
[9,22,-20,0,'#000',10,-1,'#000',17,1],
           ]

}
