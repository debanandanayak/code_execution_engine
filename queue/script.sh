compiler=$1
filename=$2
inputfile=$3
outputfile=${filename%.*}

if [ "$compiler" = "g++" ]
then
    if   $(g++ -o $outputfile $filename)
    then
        timeout 4 ./$outputfile < $inputfile
    fi
exit
elif [ "$compiler" = "javac" ]
then
    if $(javac $filename) 
    then
        timeout 4 java Main < $inputfile
    fi
    exit
fi

timeout 4 $compiler $filename < $inputfile