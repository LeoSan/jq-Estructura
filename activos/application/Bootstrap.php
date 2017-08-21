<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
	public function _initAutoload()
	{
		
		require_once "Zend/Registry.php";
	    $registry = new Zend_Registry(array(), ArrayObject::ARRAY_AS_PROPS);
	    Zend_Registry::setInstance($registry);
	    
	    require_once "Zend/Config/Xml.php";
	    $config = new Zend_Config_Xml('../data/webconfig.xml', 'project');
	    $registry->config = $config;
	    Zend_Registry::set('global', $registry->config->global);
	    Zend_Registry::set('oracle', $registry->config->oracle->database);
		Zend_Registry::set('dbmysql', $registry->config->dbmysql->database);
		Zend_Registry::set('dynamics', $registry->config->dynamics->database);
		Zend_Registry::set('gastosbi', $registry->config->gastosbi->database);
//		Zend_Registry::set('matrixdb', $registry->config->matrixdb->database);
		
		//Cada m�dulo necesita ser registrado.
		$modules = array(
            'Controlactivos'
		);
		//die('entersBootstrap5');
		foreach ($modules as $module){
			$autoloader = new Zend_Application_Module_Autoloader(
				array(
					'namespace' => ucfirst($module),
					'basePath' => APPLICATION_PATH . '/modules/' .strtolower($module)
				)
			);
		}
		
		/*$autoloader = new Zend_Application_Module_Autoloader(
				array(
					'namespace' => '_components',
					'basePath' => '/var/www/gastosfact/application/modules/planesdeviaje/models/DbTable'
				)
		);*/
		
		//var_dump($autoloader);
		//var_dump($autoloader);
		//die('entersBootstrap6');
		return $autoloader;
		//die('entersBootstrap7');
	}

}

