<?php
include("ClassConexion.php");

class ClassEventos extends ClassConexion {

    #Mostramos dos eventos en un json
    public function exibeEventos()
    {
        $BFetch=$this->conectaDB() ->prepare("select * from taller");
        $BFetch->execute();

        $J=[];
        $I=0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "id"=>$Fetch['id'],
                "tema"=>$Fetch['tema'],
                "horario"=>$Fetch['horario'],
                "expositor"=>$Fetch['expositor'],
            ];

            $I++;
        }
        
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}