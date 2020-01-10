<?php
abstract class ClassConexion {
    #conexion con la base dde datos
    protected function conectaDB()
    {
        try{
            $Con=new PDO ("mysql:host=localhost;dbname=appturismo","root","root");
            return $Con;
        }catch (PDOException $Erro) {
            return $Erro->getMessage();
        }
    }
}