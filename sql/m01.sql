SET NAMES UTF8;

DROP DATABASE IF EXISTS ma;

CREATE DATABASE ma CHARSET=UTF8;

USE ma;
#创建用户表头
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd	VARCHAR(16),
  sex TINYINT,
  phone CHAR(11),
  email VARCHAR(32),
  birthday DATE
);
#插入用户数据
INSERT INTO user VALUES(101,'majiawei','majiawei1994','1','15010666182','15010666182@139.com','1994-01-04');
#创建用户表头创建商品类名
CREATE TABLE product_band(
  bid INT PRIMARY KEY,
  bname VARCHAR(32)
);
#插入商品类名数据
INSERT INTO product_band VALUES(10,'DC');
INSERT INTO product_band VALUES(20,'Video Game');
INSERT INTO product_band VALUES(30,'Arkham Knight');
INSERT INTO product_band VALUES(40,'Films');
#创建商品详细信息
CREATE TABLE product_detail(
  pid INT PRIMARY KEY,
  pname VARCHAR(32),
  price DECIMAL(9,2),
  details VARCHAR(256),
  href VARCHAR(256),
  pic VARCHAR(128),
  pstate VARCHAR(16),
  band_name INT,
  FOREIGN KEY (band_name) REFERENCES product_band(bid)
);
#插入商品信息数据
INSERT INTO product_detail VALUES(1,'超人',5450,'不义联盟2-超人','product_detail.html?pid=1','img/new_p/pmdcij-03_face.jpg','new',10);
INSERT INTO product_detail VALUES(2,'蝙蝠侠',6473,'正义联盟-蝙蝠侠','product_detail.html?pid=2','img/new_p/mmjl-01_face_2.jpg','new',10);
INSERT INTO product_detail VALUES(3,'沙赞',6800,'雷霆沙赞-沙赞','product_detail.html?pid=3','img/new_p/mmsz-01_face.jpg','new',10);
INSERT INTO product_detail VALUES(4,'稻草人EX',6132,'阿卡姆骑士-稻草人','product_detail.html?pid=4','img/new_p/mmdc-18ex.jpg','new',30);
INSERT INTO product_detail VALUES(5,'杰洛特',5245,'巫师3-杰洛特','product_detail.html?pid=5','img/new_p/pmw3-01_thumb.jpg','new',20);
INSERT INTO product_detail VALUES(6,'一号巨像EX',5655,'旺达与巨像-一号巨像','product_detail.html?pid=6','img/new_p/udmsc-01ex_face.jpg','new',20);
INSERT INTO product_detail VALUES(7,'玛利亚',3608,'血缘-玛丽亚','product_detail.html?pid=7','img/new_p/upmbb-01ex_thumb_2.jpg','new',20);
INSERT INTO product_detail VALUES(8,'左德巨兽',17729,'剑风传奇-左德巨兽','product_detail.html?pid=8','img/new_p/upmbr-03_face.jpg','new',20);
INSERT INTO product_detail VALUES(9,'阿塔丽DX',6911,'阿塔丽:战斗天使-阿塔丽','product_detail.html?pid=9','img/best_sell/pmaba-01dx_face_dx.jpg','bestSell',40);
INSERT INTO product_detail VALUES(10,'超人EX',6911,'正义联盟-超人','product_detail.html?pid=10','img/best_sell/mmjl-06ex.jpg','bestSell',10);
INSERT INTO product_detail VALUES(11,'小丑EX',6911,'阿卡姆骑士-小丑','product_detail.html?pid=11','img/best_sell/mmdc-27ex.jpg','bestSell',30);
INSERT INTO product_detail VALUES(12,'小丑女EX',6703,'自杀小队-小丑女','product_detail.html?pid=12','img/best_sell/mmss-01ex_1.jpg','bestSell',40);
INSERT INTO product_detail VALUES(13,'阿卡姆骑士',6219,'阿卡姆骑士-阿卡姆骑士','product_detail.html?pid=13','img/nowshoping/mmdc-02ex.jpg','now',30);
INSERT INTO product_detail VALUES(14,'丧钟',6427,'阿卡姆起源-丧钟','product_detail.html?pid=14','img/nowshoping/mmdc-05ex.jpg','now',20);
INSERT INTO product_detail VALUES(15,'蝙蝠车',11062,'阿卡姆骑士-蝙蝠车','product_detail.html?pid=15','img/nowshoping/mmdc-03_thumb.jpg','now',30);
INSERT INTO product_detail VALUES(16,'贝恩',6219,'阿卡姆起源-贝恩','product_detail.html?pid=16','img/nowshoping/mmdc-07m_thumb.jpg','now',20);
INSERT INTO product_detail VALUES(17,'小丑女EX',17729,'阿卡姆骑士-小丑女','product_detail.html?pid=17','img/nowshoping/mmdc-08ex.jpg','now',30);
INSERT INTO product_detail VALUES(18,'未来蝙蝠侠',17729,'阿卡姆骑士-未来蝙蝠侠','product_detail.html?pid=18','img/nowshoping/mmdc-10ex.jpg','now',30);
INSERT INTO product_detail VALUES(19,'禁闭',11062,'变形金刚-禁闭','product_detail.html?pid=19','img/nowshoping/mmtfm-10ex_thumb.jpg','now',40);
INSERT INTO product_detail VALUES(20,'惊破天',13137,'变形金刚-惊破天','product_detail.html?pid=20','img/nowshoping/mmtfm-09gl_thumb.jpg','now',40);



