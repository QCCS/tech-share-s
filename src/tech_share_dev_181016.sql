-- MySQL dump 10.13  Distrib 5.6.35, for macos10.12 (x86_64)
--
-- Host: localhost    Database: tech_share_dev
-- ------------------------------------------------------
-- Server version	5.6.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `tech_share_dev`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `tech_share_dev` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `tech_share_dev`;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20181014041141-image.js'),('20181014041201-comment.js'),('20181014041210-post.js'),('20181014041223-post_comment.js'),('20181014041229-post_like.js'),('20181014041236-post_read.js'),('20181014041241-post_tag.js'),('20181014041246-tag.js'),('20181016041243-post_tag.js'),('20181016041246-post_tag.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,11,'mac1234','2018-10-14 08:06:00','2018-10-14 08:06:00'),(2,11,'mac12344444','2018-10-14 08:06:05','2018-10-14 11:37:33'),(3,11,'mac1234','2018-10-14 08:18:56','2018-10-14 08:18:56'),(4,11,'mac1234','2018-10-14 08:26:52','2018-10-14 08:26:52'),(5,11,'mac1234','2018-10-14 09:09:07','2018-10-14 09:09:07'),(6,11,'mac1234','2018-10-14 09:15:54','2018-10-14 09:15:54'),(7,11,'mac1234','2018-10-14 11:42:58','2018-10-14 11:42:58'),(8,11,'mac1234','2018-10-14 11:43:14','2018-10-14 11:43:14'),(9,11,'mac1234','2018-10-14 11:45:38','2018-10-14 11:45:38'),(10,11,'mac1234','2018-10-14 11:46:15','2018-10-14 11:46:15'),(11,2147483647,'mac123444444444444','2018-10-14 11:47:05','2018-10-14 11:57:34'),(12,119,'post 601','2018-10-14 12:53:14','2018-10-14 12:53:14'),(13,119,'post 602','2018-10-14 12:56:35','2018-10-14 12:56:35'),(14,119,'post 602','2018-10-14 12:57:02','2018-10-14 12:57:02'),(15,119,'post 603','2018-10-14 12:57:29','2018-10-14 12:57:29'),(16,119,'post 604','2018-10-14 12:57:34','2018-10-14 12:57:34'),(17,119,'post 604','2018-10-15 02:51:26','2018-10-15 02:51:26'),(18,119,'post 605','2018-10-15 02:51:45','2018-10-15 02:51:45'),(19,119,'post 605','2018-10-15 02:52:14','2018-10-15 02:52:14'),(20,119,'post 605','2018-10-15 02:54:19','2018-10-15 02:54:19'),(21,119,'post 605','2018-10-15 02:55:54','2018-10-15 02:55:54'),(22,119,'post 605','2018-10-15 02:56:24','2018-10-15 02:56:24'),(23,119,'post 605','2018-10-15 02:57:19','2018-10-15 02:57:19'),(24,119,'post 605','2018-10-15 02:58:59','2018-10-15 02:58:59'),(25,119,'post 605','2018-10-15 03:00:16','2018-10-15 03:00:16'),(26,119,'post 605','2018-10-15 03:01:32','2018-10-15 03:01:32'),(27,119,'post 605','2018-10-15 03:02:05','2018-10-15 03:02:05'),(28,119,'post 605','2018-10-15 03:02:33','2018-10-15 03:02:33'),(35,119,'post 605','2018-10-15 03:05:40','2018-10-15 03:05:40'),(36,119,'post 605','2018-10-15 03:05:41','2018-10-15 03:05:41'),(37,119,'post 605','2018-10-15 03:05:42','2018-10-15 03:05:42');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fee`
--

DROP TABLE IF EXISTS `fee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL,
  `u_id` varchar(16) DEFAULT NULL,
  `des` text,
  `total` int(12) DEFAULT NULL,
  `date_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fee_user_id_fk` (`u_id`),
  CONSTRAINT `fee_user_id_fk` FOREIGN KEY (`u_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fee`
--

LOCK TABLES `fee` WRITE;
/*!40000 ALTER TABLE `fee` DISABLE KEYS */;
INSERT INTO `fee` VALUES (11,'费用1','1535074021593','费用1描述',11,'2018-08-24');
/*!40000 ALTER TABLE `fee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `size` bigint(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,2147483647,'size','mac1234',0,'2018-10-14 12:12:57','2018-10-14 12:12:57');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permission` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
INSERT INTO `permission` VALUES (3,'经理3');
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `is_delete` tinyint(4) NOT NULL,
  `is_draft` tinyint(4) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,2147483647,'11','11','11',11,11,'2018-10-14 12:18:47','2018-10-14 12:18:47'),(2,2147483647,'11','11','11',11,11,'2018-10-14 12:18:53','2018-10-14 12:18:53'),(3,119,'11','11','11',11,11,'2018-10-14 12:24:22','2018-10-14 12:26:09'),(5,119,'id为2的文章','11','id为2的文章',11,11,'2018-10-14 12:51:10','2018-10-14 12:51:10'),(6,119,'id为6的文章','测试评论','id为6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的文章id为6的文',11,11,'2018-10-14 12:51:26','2018-10-15 02:15:17'),(7,119,'11','11','11',11,11,'2018-10-16 03:19:01','2018-10-16 03:19:01'),(8,119,'11','11','id为8de文章,图片<img src=http://www.json119.com/content/images/2017/12/icon.png alt=ZH前端技术分享 />',1,1,'2018-10-16 03:23:26','2018-10-16 03:23:26'),(9,119,'测试博客9','11','id为9id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,<br/>图id为9de文章,图id为9de文章,图id为9de文章,图de文章,图片</p><img src=http://www.json119.com/content/images/2017/12/icon.png alt=ZH前端技术分享 /></p>id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图<p>id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图</p>id为9id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图de文章,图片</p><img src=http://www.json119.com/content/images/2017/12/icon.png alt=ZH前端技术分享 /></p>id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图<p>id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图</p>id为9id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图de文章,图片</p><img src=http://www.json119.com/content/images/2017/12/icon.png alt=ZH前端技术分享 /></p>id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图<p>id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图</p>id为9id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图de文章,图片</p><img src=http://www.json119.com/content/images/2017/12/icon.png alt=ZH前端技术分享 /></p>id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为<br/>9de文章,图id为9de文章,图id为9de文章,图<p>id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图</p>id为9id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图de文章,图片</p><img src=http://www.json119.com/content/images/2017/12/icon.png alt=ZH前端技术分享 /></p>id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,<br/>图<p>id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图id为9de文章,图</p>',1,1,'2018-10-16 03:47:09','2018-10-16 03:47:09');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_comment`
--

DROP TABLE IF EXISTS `post_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `comment_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_comment`
--

LOCK TABLES `post_comment` WRITE;
/*!40000 ALTER TABLE `post_comment` DISABLE KEYS */;
INSERT INTO `post_comment` VALUES (1,1,1,'2018-10-14 12:42:40','2018-10-14 12:42:40'),(2,6,14,'2018-10-14 12:57:02','2018-10-14 12:57:02'),(3,6,15,'2018-10-14 12:57:29','2018-10-14 12:57:29'),(4,6,16,'2018-10-14 12:57:34','2018-10-14 12:57:34'),(5,6,17,'2018-10-15 02:51:26','2018-10-15 02:51:26'),(6,6,19,'2018-10-15 02:52:14','2018-10-15 02:52:14'),(7,6,20,'2018-10-15 02:54:19','2018-10-15 02:54:19'),(8,6,21,'2018-10-15 02:55:55','2018-10-15 02:55:55'),(9,61,22,'2018-10-15 02:56:24','2018-10-15 02:56:24'),(10,61,23,'2018-10-15 02:57:19','2018-10-15 02:57:19'),(11,61,24,'2018-10-15 02:58:59','2018-10-15 02:58:59'),(12,61,26,'2018-10-15 03:01:32','2018-10-15 03:01:32'),(13,61,35,'2018-10-15 03:05:40','2018-10-15 03:05:40'),(14,61,36,'2018-10-15 03:05:41','2018-10-15 03:05:41'),(15,61,37,'2018-10-15 03:05:42','2018-10-15 03:05:42');
/*!40000 ALTER TABLE `post_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_like`
--

DROP TABLE IF EXISTS `post_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_like` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_like`
--

LOCK TABLES `post_like` WRITE;
/*!40000 ALTER TABLE `post_like` DISABLE KEYS */;
INSERT INTO `post_like` VALUES (1,1,119,'2018-10-14 12:43:43','2018-10-14 12:43:43'),(2,6,119,'2018-10-14 13:40:13','2018-10-14 13:40:13'),(3,6,119,'2018-10-14 13:44:56','2018-10-14 13:44:56'),(4,6,119,'2018-10-14 13:44:58','2018-10-14 13:44:58');
/*!40000 ALTER TABLE `post_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_read`
--

DROP TABLE IF EXISTS `post_read`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_read` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_read`
--

LOCK TABLES `post_read` WRITE;
/*!40000 ALTER TABLE `post_read` DISABLE KEYS */;
INSERT INTO `post_read` VALUES (1,1,119,'2018-10-14 12:43:52','2018-10-14 12:43:52'),(2,6,119,'2018-10-14 13:40:26','2018-10-14 13:40:26');
/*!40000 ALTER TABLE `post_read` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_tag`
--

DROP TABLE IF EXISTS `post_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `post_id_constraint_name` (`post_id`),
  KEY `tag_id_constraint_name` (`tag_id`),
  CONSTRAINT `post_id_constraint_name` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_id_constraint_name` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_tag`
--

LOCK TABLES `post_tag` WRITE;
/*!40000 ALTER TABLE `post_tag` DISABLE KEYS */;
INSERT INTO `post_tag` VALUES (1,1,1,'2018-10-14 12:43:14','2018-10-14 12:43:14'),(2,6,4,'2018-10-14 13:35:18','2018-10-14 13:35:18'),(3,6,5,'2018-10-14 13:35:25','2018-10-14 13:35:25');
/*!40000 ALTER TABLE `post_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_permission`
--

DROP TABLE IF EXISTS `role_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_permission` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT '0',
  `permission_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permission`
--

LOCK TABLES `role_permission` WRITE;
/*!40000 ALTER TABLE `role_permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,119,'js','2018-10-14 12:32:34','2018-10-14 12:32:55'),(2,119,'js','2018-10-14 12:33:04','2018-10-14 12:33:04'),(3,119,'js','2018-10-14 13:35:05','2018-10-14 13:35:05'),(4,119,'js','2018-10-14 13:35:18','2018-10-14 13:35:18'),(5,119,'css','2018-10-14 13:35:25','2018-10-14 13:35:25'),(6,119,'post 605','2018-10-15 03:15:48','2018-10-15 03:15:48'),(8,119,'post 605','2018-10-15 03:16:49','2018-10-15 03:16:49'),(9,119,'post 605','2018-10-16 02:38:57','2018-10-16 02:38:57'),(10,119,'post 605','2018-10-16 02:51:27','2018-10-16 02:51:27');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` varchar(16) NOT NULL DEFAULT '0',
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('119','zhouli','mac123','15921552947'),('1535074021593','周立json','mac123','15921552946');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `role_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-16 22:01:40
