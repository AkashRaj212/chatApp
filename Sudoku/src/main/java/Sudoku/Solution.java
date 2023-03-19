package Sudoku;

import java.io.IOException;
import java.util.Arrays;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Solution
 */
@WebServlet("/Solution")
public class Solution extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String[] b = request.getParameter("board").split(",");
		
        int[][] board = new int[9][9];
        
        int k =0;
        for(int i=0;i<9;i++) {
        	for(int j=0;j<9;j++) {
        		board[i][j]=Integer.valueOf(b[k]);
        		k++;
        		System.out.println(board[i][j]);
        	}
        }
        
        Sudokusolver sudokusolver = new Sudokusolver(board);
        System.out.println("wert");
        if(sudokusolver.solve()) {
        	   
       		response.getWriter().append(sudokusolver.getBoard());
        }
     
	}

}
 