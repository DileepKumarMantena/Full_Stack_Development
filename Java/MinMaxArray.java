public class MinMaxArray {
    public static void main(String[] args) {
        int [] array={1,2,5,7,3,0};
        

        //Static  finding 
        int max =array[4];
        int min =array[5];
        System.out.println(max);
        System.out.println(min);
        System.out.println("length"+array.length);
        //Dynamic finding
        for (int i=1;i<array.length;i++){
            if (array[i]>max){
                max=array[i];
            }
            if (array[i]<min){
                min=array[i];
            }        }


       System.out.println("Max value "+max);
       System.out.println("Min value "+min);
    }
}
