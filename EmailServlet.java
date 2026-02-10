import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/send-email")
public class EmailServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Retrieve form data
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String message = request.getParameter("message");

        // Prepare data for EmailJSClient
        Map<String, String> clientData = new HashMap<>();
        clientData.put("name", name);
        clientData.put("email", email);
        clientData.put("phone", phone);
        clientData.put("message", message);

        // Call EmailJSClient to send the email
        EmailJSClient.sendEmail(clientData);

        // Respond to the client
        response.setContentType("text/html");
        response.getWriter().println("<h1>Email sent successfully!</h1>");
    }
}