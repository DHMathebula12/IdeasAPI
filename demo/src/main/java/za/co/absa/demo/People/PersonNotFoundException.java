package za.co.absa.demo.People;

public class PersonNotFoundException extends RuntimeException {

    public PersonNotFoundException(String exception) {
        super(exception);
    }
}
