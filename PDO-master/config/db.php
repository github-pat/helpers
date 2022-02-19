<?php
  class db
  {
  	private $dbhost = 'localhost';
  	private $dbuser = 'root';
  	private $dbpass = '';
  	private $dbname = 'dataBaseName';
  	public function connect()
  	{
  		$mysqlConnect = "mysql:host=$this->dbhost;
  						 dbname=$this->dbname";
  		$connect = new PDO($mysqlConnect, $this->dbuser, $this->dbpass);
  		$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  		$connect->exec("set names utf8");
  		return $connect;
  	}
  }
