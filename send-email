import java.util.HashMap;
import java.util.Map;

public class EmailJSClient {

    private static final String PUBLIC_KEY = "JnoJU8VlnhCR8fcld";
    private static final String SERVICE_ID = "service_dxlai5b";
    private static final String TEMPLATE_ID = "template_prfcszc";

    public static void main(String[] args) {
        // Example data from a client
        Map<String, String> clientData = new HashMap<>();
        clientData.put("name", "John Doe");
        clientData.put("email", "johndoe@example.com");
        clientData.put("phone", "1234567890");
        clientData.put("message", "Hello, I am interested in your services.");

        sendEmail(clientData);
    }

    public static void sendEmail(Map<String, String> data) {
        // Simulate sending email via EmailJS
        System.out.println("Sending email with the following details:");
        System.out.println("Service ID: " + SERVICE_ID);
        System.out.println("Template ID: " + TEMPLATE_ID);
        System.out.println("Public Key: " + PUBLIC_KEY);
        System.out.println("Client Data: " + data);

        // Here you would integrate with EmailJS API using an HTTP client
        // Example: Use libraries like HttpURLConnection, OkHttp, or Apache HttpClient
    }
}