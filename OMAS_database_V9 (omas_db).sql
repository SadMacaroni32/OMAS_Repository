-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: omas_db
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_act_log`
--

DROP TABLE IF EXISTS `tbl_act_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_act_log` (
  `log_id` int unsigned NOT NULL AUTO_INCREMENT,
  `emp_id` varchar(50) NOT NULL,
  `log_desc` varchar(1000) NOT NULL,
  `log_date` varchar(50) NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`log_id`),
  KEY `fk_emp_id_logs` (`emp_id`),
  CONSTRAINT `fk_emp_id_logs` FOREIGN KEY (`emp_id`) REFERENCES `tbl_user` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_act_log`
--

LOCK TABLES `tbl_act_log` WRITE;
/*!40000 ALTER TABLE `tbl_act_log` DISABLE KEYS */;
INSERT INTO `tbl_act_log` VALUES (1,'101','Added a user','2023-08-31',0,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(2,'101','Edited a user','2023-08-31',0,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(3,'101','Deleted a user','2023-08-31',0,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(4,'101','Restored a user','2023-08-31',0,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49');
/*!40000 ALTER TABLE `tbl_act_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_clients_mst`
--

DROP TABLE IF EXISTS `tbl_clients_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_clients_mst` (
  `client_id` int unsigned NOT NULL AUTO_INCREMENT,
  `client_name` varchar(150) NOT NULL,
  `client_sh_name` varchar(50) NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_clients_mst`
--

LOCK TABLES `tbl_clients_mst` WRITE;
/*!40000 ALTER TABLE `tbl_clients_mst` DISABLE KEYS */;
INSERT INTO `tbl_clients_mst` VALUES (1,'this is NSP','NSP',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(2,'this is TGSI','TGSI',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(3,'this is NCOS','NCOS',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(4,'this is MP','MP',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(5,'this is SP','SP',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47');
/*!40000 ALTER TABLE `tbl_clients_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_department_mst`
--

DROP TABLE IF EXISTS `tbl_department_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_department_mst` (
  `dept_id` int unsigned NOT NULL AUTO_INCREMENT,
  `dept_name` varchar(150) NOT NULL,
  `dept_sh_name` varchar(50) NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_department_mst`
--

LOCK TABLES `tbl_department_mst` WRITE;
/*!40000 ALTER TABLE `tbl_department_mst` DISABLE KEYS */;
INSERT INTO `tbl_department_mst` VALUES (1,'1ST Dept','1DEP',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(2,'2ND Dept','2DEP',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(3,'3RD Dept','3DEP',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(4,'4TH Dept','4DEP',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(5,'5TH Dept','5DEP',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47');
/*!40000 ALTER TABLE `tbl_department_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_dev_phase_mst`
--

DROP TABLE IF EXISTS `tbl_dev_phase_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_dev_phase_mst` (
  `dev_phase_id` int unsigned NOT NULL AUTO_INCREMENT,
  `dev_phase_name` varchar(150) NOT NULL,
  `dev_phase_sh_name` varchar(50) NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`dev_phase_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_dev_phase_mst`
--

LOCK TABLES `tbl_dev_phase_mst` WRITE;
/*!40000 ALTER TABLE `tbl_dev_phase_mst` DISABLE KEYS */;
INSERT INTO `tbl_dev_phase_mst` VALUES (1,'Requirements','RQT',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(2,'Basic Design','BD',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(3,'Detailed Design','DD',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(4,'Coding','CD',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(5,'Unit Test','UT',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(6,'Combined Testing','IT',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(7,'Comprehensive Testing','CT',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(8,'User Acceptance Testing','UAT',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(9,'Maintenance','MAINTE',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48');
/*!40000 ALTER TABLE `tbl_dev_phase_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_dev_type_mst`
--

DROP TABLE IF EXISTS `tbl_dev_type_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_dev_type_mst` (
  `dev_type_id` int unsigned NOT NULL AUTO_INCREMENT,
  `dev_type_name` varchar(150) NOT NULL,
  `dev_type_sh_name` varchar(50) NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`dev_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_dev_type_mst`
--

LOCK TABLES `tbl_dev_type_mst` WRITE;
/*!40000 ALTER TABLE `tbl_dev_type_mst` DISABLE KEYS */;
INSERT INTO `tbl_dev_type_mst` VALUES (1,'Agile','AGI',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(2,'Scrum','SCR',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(3,'Kanban','KAN',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(4,'Extreme Programming','XP',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(5,'Lean Software Development','LSD',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(6,'Dynamic System Development Method','DSDM',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(7,'Crystal','CRY',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(8,'Feature-Driven Development','FDD',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48');
/*!40000 ALTER TABLE `tbl_dev_type_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_multi_role`
--

DROP TABLE IF EXISTS `tbl_multi_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_multi_role` (
  `user_role_id` int unsigned NOT NULL AUTO_INCREMENT,
  `emp_id` varchar(50) NOT NULL,
  `role_id` int unsigned NOT NULL DEFAULT '1',
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_role_id`),
  KEY `fk_multi_emp_id` (`emp_id`),
  KEY `fk_multi_role_id` (`role_id`),
  CONSTRAINT `fk_multi_emp_id` FOREIGN KEY (`emp_id`) REFERENCES `tbl_user` (`emp_id`),
  CONSTRAINT `fk_multi_role_id` FOREIGN KEY (`role_id`) REFERENCES `tbl_role_mst` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_multi_role`
--

LOCK TABLES `tbl_multi_role` WRITE;
/*!40000 ALTER TABLE `tbl_multi_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_multi_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_personal_info`
--

DROP TABLE IF EXISTS `tbl_personal_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_personal_info` (
  `pid` int unsigned NOT NULL AUTO_INCREMENT,
  `emp_id` varchar(50) NOT NULL,
  `fname` varchar(150) NOT NULL,
  `lname` varchar(150) NOT NULL,
  `mname` varchar(150) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`pid`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_emp_id_personal_info` (`emp_id`),
  CONSTRAINT `fk_emp_id_personal_info` FOREIGN KEY (`emp_id`) REFERENCES `tbl_user` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_personal_info`
--

LOCK TABLES `tbl_personal_info` WRITE;
/*!40000 ALTER TABLE `tbl_personal_info` DISABLE KEYS */;
INSERT INTO `tbl_personal_info` VALUES (1,'101','Ricky','Galpo','Torres','rickygalpo@gmail.com',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(2,'102','Allona','Fabre','Torres','allonafabre@gmail.com',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(3,'103','Charlene','Espanol','Torres','charleneespanol@gmail.com',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(4,'104','Ariel','Diego','Torres','arieldiego@gmail.com',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(5,'105','Shernan','Mateo','Torres','shernanmateo@gmail.com',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(6,'106','Christian','Jacinto','Torres','christianjacinto@gmail.com',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(13,'107','Jose Enrique','Aquino','Cambronero','jose.enrique.aquino51@gmail.com',0,'1','2024-04-23 00:49:10','1','2024-04-23 00:49:10'),(14,'108','Mike Carlos','Daya','Guillen','mikeedaya@gmail.com',0,'1','2024-04-23 00:51:00','1','2024-04-23 00:51:00'),(15,'109','Christine','Gulmatico','Arroyo','tinegulmatico@gmail.com',0,'1','2024-04-23 00:52:28','1','2024-04-23 00:52:28'),(16,'110','Geraldine Mae','Ramirez','Santos','geraldinemaesramirez@gmail.com',0,'1','2024-04-23 00:53:49','1','2024-04-23 00:53:49'),(17,'111','John Dale','Unite','Velasco','unitejohndalev@gmail.com',0,'1','2024-04-23 00:58:10','1','2024-04-23 00:58:10'),(24,'112','mae','ramirez','santos','mramirez@tspi.com.ph',0,NULL,'2024-04-23 22:15:26',NULL,'2024-04-23 22:15:26'),(25,'113','mae','ramirez','santos','sramirez@tspi.com.ph',0,NULL,'2024-04-23 22:17:29',NULL,'2024-04-23 22:17:29'),(26,'114','gemmm','ramirez','sss','sgramirez@tspi.com.ph',0,NULL,'2024-04-23 22:17:58',NULL,'2024-04-23 22:17:58');
/*!40000 ALTER TABLE `tbl_personal_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_position_mst`
--

DROP TABLE IF EXISTS `tbl_position_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_position_mst` (
  `position_id` int unsigned NOT NULL AUTO_INCREMENT,
  `position_name` varchar(150) NOT NULL,
  `position_sh_name` varchar(50) NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`position_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_position_mst`
--

LOCK TABLES `tbl_position_mst` WRITE;
/*!40000 ALTER TABLE `tbl_position_mst` DISABLE KEYS */;
INSERT INTO `tbl_position_mst` VALUES (1,'Design Engineer I','DE1',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(2,'Design Engineer II','DE2',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(3,'Senior Design Engineer','SDE',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(4,'Junior Engineering Supervisor','JES',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(5,'Engineering Supervisor','ES',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(6,'Engineering Manager','EM',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(7,'Senior Engineering Manger','SEM',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(8,'Assistant General Manager','AGM',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(9,'General Manager','GM',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(10,'Engineering Director','ED',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47');
/*!40000 ALTER TABLE `tbl_position_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_proj_info`
--

DROP TABLE IF EXISTS `tbl_proj_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_proj_info` (
  `proj_info_id` int unsigned NOT NULL AUTO_INCREMENT,
  `dev_type_id` int unsigned NOT NULL,
  `client_id` int unsigned NOT NULL,
  `proj_status_id` int unsigned NOT NULL,
  `proj_id` int unsigned NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`proj_info_id`),
  KEY `fk_dev_type_id` (`dev_type_id`),
  KEY `fk_client_id` (`client_id`),
  KEY `fk_proj_status_id` (`proj_status_id`),
  KEY `fk_proj_id_proj_info` (`proj_id`),
  CONSTRAINT `fk_client_id` FOREIGN KEY (`client_id`) REFERENCES `tbl_clients_mst` (`client_id`),
  CONSTRAINT `fk_dev_type_id` FOREIGN KEY (`dev_type_id`) REFERENCES `tbl_dev_type_mst` (`dev_type_id`),
  CONSTRAINT `fk_proj_id_proj_info` FOREIGN KEY (`proj_id`) REFERENCES `tbl_project_mst` (`proj_id`),
  CONSTRAINT `fk_proj_status_id` FOREIGN KEY (`proj_status_id`) REFERENCES `tbl_proj_status_mst` (`proj_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_proj_info`
--

LOCK TABLES `tbl_proj_info` WRITE;
/*!40000 ALTER TABLE `tbl_proj_info` DISABLE KEYS */;
INSERT INTO `tbl_proj_info` VALUES (1,1,1,1,1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(2,2,2,1,2,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(3,3,3,1,3,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48');
/*!40000 ALTER TABLE `tbl_proj_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_proj_members`
--

DROP TABLE IF EXISTS `tbl_proj_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_proj_members` (
  `up_role_id` int unsigned NOT NULL AUTO_INCREMENT,
  `upid` int unsigned NOT NULL,
  `role_id` int unsigned NOT NULL DEFAULT '1',
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`up_role_id`),
  KEY `fk_proj_mem_role_id` (`role_id`),
  KEY `fk_proj_mem_upid` (`upid`),
  CONSTRAINT `fk_proj_mem_role_id` FOREIGN KEY (`role_id`) REFERENCES `tbl_role_mst` (`role_id`),
  CONSTRAINT `fk_proj_mem_upid` FOREIGN KEY (`upid`) REFERENCES `tbl_user_project` (`upid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_proj_members`
--

LOCK TABLES `tbl_proj_members` WRITE;
/*!40000 ALTER TABLE `tbl_proj_members` DISABLE KEYS */;
INSERT INTO `tbl_proj_members` VALUES (1,1,1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(2,2,1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(3,3,1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(4,4,1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(5,5,1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(6,6,1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48');
/*!40000 ALTER TABLE `tbl_proj_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_proj_phase`
--

DROP TABLE IF EXISTS `tbl_proj_phase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_proj_phase` (
  `proj_phase_id` int unsigned NOT NULL AUTO_INCREMENT,
  `dev_phase_id` int unsigned NOT NULL,
  `proj_id` int unsigned NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`proj_phase_id`),
  KEY `fk_dev_phase_id` (`dev_phase_id`),
  KEY `fk_proj_id_proj_phase` (`proj_id`),
  CONSTRAINT `fk_dev_phase_id` FOREIGN KEY (`dev_phase_id`) REFERENCES `tbl_dev_phase_mst` (`dev_phase_id`),
  CONSTRAINT `fk_proj_id_proj_phase` FOREIGN KEY (`proj_id`) REFERENCES `tbl_project_mst` (`proj_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_proj_phase`
--

LOCK TABLES `tbl_proj_phase` WRITE;
/*!40000 ALTER TABLE `tbl_proj_phase` DISABLE KEYS */;
INSERT INTO `tbl_proj_phase` VALUES (1,1,1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(2,1,2,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(3,1,3,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48');
/*!40000 ALTER TABLE `tbl_proj_phase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_proj_status_mst`
--

DROP TABLE IF EXISTS `tbl_proj_status_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_proj_status_mst` (
  `proj_status_id` int unsigned NOT NULL AUTO_INCREMENT,
  `proj_status_name` varchar(150) NOT NULL,
  `proj_status_description` varchar(1000) NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`proj_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_proj_status_mst`
--

LOCK TABLES `tbl_proj_status_mst` WRITE;
/*!40000 ALTER TABLE `tbl_proj_status_mst` DISABLE KEYS */;
INSERT INTO `tbl_proj_status_mst` VALUES (1,'Open','This project is opened for development.',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(2,'Close','This project is closed for development.',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(3,'Cancelled','This project has been cancelled.',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48');
/*!40000 ALTER TABLE `tbl_proj_status_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_proj_tech`
--

DROP TABLE IF EXISTS `tbl_proj_tech`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_proj_tech` (
  `proj_tech_id` int unsigned NOT NULL AUTO_INCREMENT,
  `tech_id` int unsigned NOT NULL,
  `proj_id` int unsigned NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`proj_tech_id`),
  KEY `fk_tech_id` (`tech_id`),
  KEY `fk_proj_id_proj_tech` (`proj_id`),
  CONSTRAINT `fk_proj_id_proj_tech` FOREIGN KEY (`proj_id`) REFERENCES `tbl_project_mst` (`proj_id`),
  CONSTRAINT `fk_tech_id` FOREIGN KEY (`tech_id`) REFERENCES `tbl_technology_mst` (`tech_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_proj_tech`
--

LOCK TABLES `tbl_proj_tech` WRITE;
/*!40000 ALTER TABLE `tbl_proj_tech` DISABLE KEYS */;
INSERT INTO `tbl_proj_tech` VALUES (1,1,1,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(2,2,1,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(3,3,1,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(4,4,1,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(5,5,1,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(6,6,1,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(7,1,2,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(8,2,2,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(9,3,2,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(10,4,2,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(11,5,2,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(12,6,2,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(13,1,3,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(14,2,3,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(15,3,3,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(16,4,3,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(17,5,3,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(18,6,3,0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49');
/*!40000 ALTER TABLE `tbl_proj_tech` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_project_mst`
--

DROP TABLE IF EXISTS `tbl_project_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_project_mst` (
  `proj_id` int unsigned NOT NULL AUTO_INCREMENT,
  `proj_name` varchar(100) NOT NULL,
  `proj_code` varchar(15) NOT NULL,
  `client_id` int unsigned NOT NULL,
  `proj_description` varchar(1000) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`proj_id`),
  KEY `fk_client_project` (`client_id`),
  CONSTRAINT `fk_client_project` FOREIGN KEY (`client_id`) REFERENCES `tbl_clients_mst` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_project_mst`
--

LOCK TABLES `tbl_project_mst` WRITE;
/*!40000 ALTER TABLE `tbl_project_mst` DISABLE KEYS */;
INSERT INTO `tbl_project_mst` VALUES (1,'Time Table','TT',1,'Manages the schedules and events of Tsukiden Global Solutions Inc.','2023-06-01','2023-07-01',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(2,'Seat Plan','SP',2,'Manages the seat plan of Tsukiden Global Solutions Inc.','2023-07-01','2023-08-01',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(3,'Control Center','CC',3,'Manages the users and projects of Tsukiden Global Solutions Inc.','2023-08-01','2023-09-01',0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48');
/*!40000 ALTER TABLE `tbl_project_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_reservation`
--

DROP TABLE IF EXISTS `tbl_reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_reservation` (
  `reservation_id` int unsigned NOT NULL AUTO_INCREMENT,
  `emp_id` varchar(50) NOT NULL,
  `seat_id` int unsigned NOT NULL,
  `proj_id` int unsigned NOT NULL,
  `start_date` timestamp NOT NULL,
  `end_date` timestamp NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `reservation_seat_status` varchar(45) NOT NULL DEFAULT 'occupied',
  PRIMARY KEY (`reservation_id`),
  KEY `emp_id` (`emp_id`),
  KEY `seat_id` (`seat_id`),
  KEY `proj_id` (`proj_id`),
  CONSTRAINT `tbl_reservation_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `tbl_user` (`emp_id`),
  CONSTRAINT `tbl_reservation_ibfk_2` FOREIGN KEY (`seat_id`) REFERENCES `tbl_seat` (`seat_id`),
  CONSTRAINT `tbl_reservation_ibfk_3` FOREIGN KEY (`proj_id`) REFERENCES `tbl_project_mst` (`proj_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_reservation`
--

LOCK TABLES `tbl_reservation` WRITE;
/*!40000 ALTER TABLE `tbl_reservation` DISABLE KEYS */;
INSERT INTO `tbl_reservation` VALUES (1,'101',1,1,'2024-05-01 02:00:00','2024-05-01 03:00:00','This is my reservation',0,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49','occupied'),(2,'102',2,1,'2024-05-01 02:00:00','2024-05-01 03:00:00','This is my reservation',0,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49','occupied'),(3,'103',5,2,'2024-05-01 02:00:00','2024-05-01 03:00:00','This is my reservation',0,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49','occupied'),(4,'104',6,2,'2024-05-01 02:00:00','2024-05-01 03:00:00','This is my reservation',0,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49','occupied'),(5,'105',9,3,'2024-05-01 02:00:00','2024-05-01 03:00:00','This is my reservation',0,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49','occupied'),(6,'106',10,3,'2024-05-01 02:00:00','2024-05-01 03:00:00','This is my reservation',0,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49','occupied');
/*!40000 ALTER TABLE `tbl_reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_role_mst`
--

DROP TABLE IF EXISTS `tbl_role_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_role_mst` (
  `role_id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `role_sh_name` varchar(50) NOT NULL,
  `role_user_level` int unsigned NOT NULL DEFAULT '1',
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_role_mst`
--

LOCK TABLES `tbl_role_mst` WRITE;
/*!40000 ALTER TABLE `tbl_role_mst` DISABLE KEYS */;
INSERT INTO `tbl_role_mst` VALUES (1,'System Administrator','SysAdmin',1,0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(2,'Account Management','AccManager',1,0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(3,'Project Management','ProjManager',1,0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47');
/*!40000 ALTER TABLE `tbl_role_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_seat`
--

DROP TABLE IF EXISTS `tbl_seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_seat` (
  `seat_id` int unsigned NOT NULL AUTO_INCREMENT,
  `seat_status` enum('occupied','available','repairing','reserved') DEFAULT 'available',
  `del_flag` int DEFAULT '0',
  `dept_id` int unsigned NOT NULL,
  `proj_id` int unsigned NOT NULL,
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`seat_id`),
  KEY `fk_seat_user_dept` (`dept_id`),
  KEY `fk_seat_user_proj` (`proj_id`),
  CONSTRAINT `fk_seat_user_dept` FOREIGN KEY (`dept_id`) REFERENCES `tbl_department_mst` (`dept_id`),
  CONSTRAINT `fk_seat_user_proj` FOREIGN KEY (`proj_id`) REFERENCES `tbl_project_mst` (`proj_id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_seat`
--

LOCK TABLES `tbl_seat` WRITE;
/*!40000 ALTER TABLE `tbl_seat` DISABLE KEYS */;
INSERT INTO `tbl_seat` VALUES (1,'available',0,1,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(2,'available',0,2,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(3,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(4,'available',0,2,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(5,'available',0,1,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(6,'available',0,2,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(7,'available',0,3,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(8,'available',0,4,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(9,'available',0,5,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(10,'available',0,1,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(11,'available',0,3,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(12,'available',0,5,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(13,'available',0,1,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(14,'available',0,3,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(15,'available',0,2,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(16,'available',0,5,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(17,'available',0,2,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(18,'available',0,1,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(19,'available',0,4,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(20,'available',0,4,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(21,'available',0,2,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(22,'available',0,2,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(23,'available',0,2,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(24,'available',0,1,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(25,'available',0,3,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(26,'available',0,4,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(27,'available',0,5,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(28,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(29,'available',0,3,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(30,'available',0,2,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(31,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(32,'available',0,3,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(33,'available',0,2,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(34,'available',0,1,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(35,'available',0,2,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(36,'available',0,3,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(37,'available',0,4,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(38,'available',0,3,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(39,'available',0,1,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(40,'available',0,2,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(41,'available',0,3,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(42,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(43,'available',0,2,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(44,'available',0,3,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(45,'available',0,4,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(46,'available',0,1,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(47,'available',0,2,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(48,'available',0,3,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(49,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(50,'available',0,2,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(51,'available',0,4,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(52,'available',0,5,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(53,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(54,'available',0,1,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(55,'available',0,3,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(56,'available',0,2,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(57,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(58,'available',0,4,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(59,'available',0,2,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(60,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(61,'available',0,1,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(62,'available',0,2,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(63,'available',0,3,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(64,'available',0,3,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(65,'available',0,4,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(66,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(67,'available',0,2,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(68,'available',0,3,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(69,'available',0,1,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(70,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(71,'available',0,3,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(72,'available',0,2,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(73,'available',0,4,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(74,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(75,'available',0,2,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(76,'available',0,3,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(77,'available',0,1,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(78,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(79,'available',0,3,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(80,'available',0,1,3,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(81,'available',0,2,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(82,'available',0,1,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(83,'available',0,2,2,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(84,'available',0,3,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49'),(85,'available',0,1,1,NULL,'2024-04-11 00:19:49',NULL,'2024-04-11 00:19:49');
/*!40000 ALTER TABLE `tbl_seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_section_mst`
--

DROP TABLE IF EXISTS `tbl_section_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_section_mst` (
  `section_id` int unsigned NOT NULL AUTO_INCREMENT,
  `section_name` varchar(150) NOT NULL,
  `section_sh_name` varchar(50) NOT NULL,
  `dept_id` int unsigned NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`section_id`),
  KEY `fk_dept_id_section` (`dept_id`),
  CONSTRAINT `fk_dept_id_section` FOREIGN KEY (`dept_id`) REFERENCES `tbl_department_mst` (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_section_mst`
--

LOCK TABLES `tbl_section_mst` WRITE;
/*!40000 ALTER TABLE `tbl_section_mst` DISABLE KEYS */;
INSERT INTO `tbl_section_mst` VALUES (1,'SSS Business Unit','SSBU',1,0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(2,'VSBU','VSBU',2,0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),(3,'1st and 2nd SSS Business Unit','1 and 2 SSBU',3,0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47');
/*!40000 ALTER TABLE `tbl_section_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_status_mst`
--

DROP TABLE IF EXISTS `tbl_status_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_status_mst` (
  `status_code` varchar(10) NOT NULL,
  `status_name` varchar(150) NOT NULL,
  `status_desc` varchar(1000) NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`status_code`),
  UNIQUE KEY `status_code` (`status_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_status_mst`
--

LOCK TABLES `tbl_status_mst` WRITE;
/*!40000 ALTER TABLE `tbl_status_mst` DISABLE KEYS */;
INSERT INTO `tbl_status_mst` VALUES ('BP','Business Partner','Business Partner Company',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),('INT','Intern','Intern Employee',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),('REG','Regular','Regular Employee',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),('TRA','Trainee','Trainee Employee',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47');
/*!40000 ALTER TABLE `tbl_status_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_technology_mst`
--

DROP TABLE IF EXISTS `tbl_technology_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_technology_mst` (
  `tech_id` int unsigned NOT NULL AUTO_INCREMENT,
  `tech_name` varchar(150) NOT NULL,
  `tech_sh_name` varchar(50) NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`tech_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_technology_mst`
--

LOCK TABLES `tbl_technology_mst` WRITE;
/*!40000 ALTER TABLE `tbl_technology_mst` DISABLE KEYS */;
INSERT INTO `tbl_technology_mst` VALUES (1,'Java','JV',0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(2,'Java Springboot','JVSB',0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(3,'Structured Query Language','SQL',0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(4,'MyBatis','MYB',0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(5,'React','REA',0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49'),(6,'Typescript','TS',0,'1','2024-04-11 00:19:49','1','2024-04-11 00:19:49');
/*!40000 ALTER TABLE `tbl_technology_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user` (
  `emp_id` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `position_id` int unsigned DEFAULT NULL,
  `dept_id` int unsigned DEFAULT NULL,
  `section_id` int unsigned DEFAULT NULL,
  `status_code` varchar(10) DEFAULT NULL,
  `role_id` int unsigned DEFAULT '1',
  `img_src` varchar(255) DEFAULT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`emp_id`),
  UNIQUE KEY `emp_id` (`emp_id`),
  UNIQUE KEY `username` (`username`),
  KEY `fk_position_id` (`position_id`),
  KEY `fk_dept_id_user` (`dept_id`),
  KEY `fk_section_id` (`section_id`),
  KEY `fk_status_code` (`status_code`),
  KEY `fk_role_id` (`role_id`),
  CONSTRAINT `fk_dept_id_user` FOREIGN KEY (`dept_id`) REFERENCES `tbl_department_mst` (`dept_id`),
  CONSTRAINT `fk_position_id` FOREIGN KEY (`position_id`) REFERENCES `tbl_position_mst` (`position_id`),
  CONSTRAINT `fk_role_id` FOREIGN KEY (`role_id`) REFERENCES `tbl_role_mst` (`role_id`),
  CONSTRAINT `fk_section_id` FOREIGN KEY (`section_id`) REFERENCES `tbl_section_mst` (`section_id`),
  CONSTRAINT `fk_status_code` FOREIGN KEY (`status_code`) REFERENCES `tbl_status_mst` (`status_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user`
--

LOCK TABLES `tbl_user` WRITE;
/*!40000 ALTER TABLE `tbl_user` DISABLE KEYS */;
INSERT INTO `tbl_user` VALUES ('101','rgalpo','tsukiden+',1,1,1,'TRA',1,'Default',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),('102','afabre','tsukiden+',2,2,2,'TRA',2,'Default',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),('103','cespanol','tsukiden+',3,3,3,'TRA',3,'Default',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),('104','adiego','tsukiden+',4,1,1,'TRA',1,'Default',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),('105','smateo','tsukiden+',5,1,1,'TRA',2,'Default',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),('106','cjacinto','tsukiden+',6,1,1,'TRA',3,'Default',0,'1','2024-04-11 00:19:47','1','2024-04-11 00:19:47'),('107','jaquino','$2a$10$/vRhaTETh1Pu/y91Z5iQoeWIsohBrQK5Wu3rLMUTl2C1ERjN6QcYG',1,1,1,'TRA',1,'Default',0,'1','2024-04-23 00:49:10','1','2024-04-23 00:49:10'),('108','mdaya','$2a$10$wDLGGLpmibpqkwnNqOMsTeQ8zeje/FLvzTNfXL5HgnTGtuZvzJRAi',1,1,1,'TRA',1,'Default',0,'1','2024-04-23 00:51:00','1','2024-04-23 00:51:00'),('109','cgulmatico','$2a$10$9j.Sk6JjRhPY6zB4SdSwseRFbYSpX6ZpG6n3dQ3UU6LLTcXz23d2O',1,1,1,'TRA',1,'Default',0,'1','2024-04-23 00:52:28','1','2024-04-23 00:52:28'),('110','gramirez','$2a$10$3TxUWoAjIWxg7hgb8gbp7u6immkVKGlxCUXatwd1pONJq922OqIBG',1,1,1,'TRA',1,'Default',0,'1','2024-04-23 00:53:49','1','2024-04-23 00:53:49'),('111','junite','$2a$10$9/9xc5.4gLY1xU32ARKhIetRE7KuphnlPdBRqosveMQ0wx1T5Pmbu',1,1,1,'TRA',1,'Default',0,'1','2024-04-23 00:58:10','1','2024-04-23 00:58:10'),('112','mramirez','$2a$10$naNPYKrzYwK/6IU9qTNVf.NoP0BvwKAbSQ9VaAS5BNV17q7XypVP6',1,1,1,'TRA',1,'Default',0,NULL,'2024-04-23 22:15:26',NULL,'2024-04-23 22:15:26'),('113','sramirez','$2a$10$c4481yWE.VQuKR7BKZHJW.D3TstCtd4mybAd1ksXqccSdzJC0xnFW',1,1,1,'TRA',1,'Default',0,NULL,'2024-04-23 22:17:29',NULL,'2024-04-23 22:17:29'),('114','sgramirez','$2a$10$PtI2nHLnEXUgq0UnyRXOdefbO8kMkN2UjP5zfYf1rMGKUnhP8Mz9e',1,1,1,'TRA',1,'Default',0,NULL,'2024-04-23 22:17:58',NULL,'2024-04-23 22:17:58');
/*!40000 ALTER TABLE `tbl_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_project`
--

DROP TABLE IF EXISTS `tbl_user_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user_project` (
  `upid` int unsigned NOT NULL AUTO_INCREMENT,
  `emp_id` varchar(50) NOT NULL,
  `proj_id` int unsigned NOT NULL,
  `del_flag` int DEFAULT '0',
  `reg_id` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` varchar(50) DEFAULT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`upid`),
  KEY `fk_emp_id_user_project` (`emp_id`),
  KEY `fk_proj_id` (`proj_id`),
  CONSTRAINT `fk_emp_id_user_project` FOREIGN KEY (`emp_id`) REFERENCES `tbl_user` (`emp_id`),
  CONSTRAINT `fk_proj_id` FOREIGN KEY (`proj_id`) REFERENCES `tbl_project_mst` (`proj_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_project`
--

LOCK TABLES `tbl_user_project` WRITE;
/*!40000 ALTER TABLE `tbl_user_project` DISABLE KEYS */;
INSERT INTO `tbl_user_project` VALUES (1,'101',1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(2,'102',3,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(3,'103',2,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(4,'104',2,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(5,'105',1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(6,'106',2,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(7,'107',3,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(8,'108',1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(9,'109',2,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(10,'110',3,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48'),(11,'111',1,0,'1','2024-04-11 00:19:48','1','2024-04-11 00:19:48');
/*!40000 ALTER TABLE `tbl_user_project` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-24  6:21:57
