package cn.codeforfun;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Administrator on 2016/12/13 0013.
 */
@SpringBootApplication
@Controller
public class Application {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class);
    }
}
