package com.example.app;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    TextView txtJob, txtStudy, txtGame, txtOther;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // set full screen
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);

        setContentView(R.layout.activity_main);

        txtJob = findViewById(R.id.txt_job);
        txtStudy = findViewById(R.id.txt_study);
        txtGame = findViewById(R.id.txt_game);
        txtOther = findViewById(R.id.txt_others);

        View.OnClickListener listener = new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                switch (view.getId()) {
                    case R.id.txt_job:
                        Intent intentJ = new Intent(MainActivity.this,WorkActivity.class);
                        startActivity(intentJ);
                        break;
                    default:
                        break;
                }
            }
        };

        txtJob.setOnClickListener(listener);
        txtStudy.setOnClickListener(listener);
        txtGame.setOnClickListener(listener);
        txtOther.setOnClickListener(listener);


    }
}