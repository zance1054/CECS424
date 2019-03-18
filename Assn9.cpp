/*
Authors: Kim-Wilson Ngo, Alec Fielding, Tajbir Sandhu
Assignment 9
*/
#include <iostream>
#include <cstdlib>

using namespace std;

/*
Takes in matrices and multiplies them. Prints them out at the end.
*/
void matrixMult(int **matrix1, int **matrix2, int a, int b, int c, int d)
{
	//Create Result Matrix
	int** resultMat = new int*[a];
	for (int i = 0; i < a; ++i)
	{
		*(resultMat + i) = new int[d];
	}

	//Fill Result Matrix
	for (int i = 0; i < a; i++)
	{
		for (int j = 0; j < b; j++)
		{
			//matrix1[i][j] = matrix1Val;
			*(*(resultMat + i) + j) = 0;
		}
	}

	//Matrix Multiplication
	for (int i = 0; i < a; i++)
	{
		for (int j = 0; j < d; j++)
		{
			for (int z = 0; z < b; z++)
			{
				*(*(resultMat + i) + j) += *(*(matrix1 + i) + z) * *(*(matrix2 + z) + j);
				
			}
		}
	}
	
	//Prints Matrix
	for (int i = 0; i < a; i++)
	{
		for (int j = 0; j < d; j++)
		{
			cout << *(*(resultMat + i) + j) << " ";
		}
		cout << "\n";
	}
}

int main(int argc, char** argv)
{
	//int a = 2, b = 2, c = 2, d = 2;
	int a = atoi(argv[1]), b = atoi(argv[2]), c = atoi(argv[3]), d = atoi(argv[4]);
	int temp = 0;

	if (b != c)
	{
		cout << "CANNOT MULTIPLY THESE MATRICES. ALTER YOUR ROWS & COLUMNS" << endl;
		return 0;
	}

	//Declare 2D Pointer Array
	int** matrix1 = new int*[a];
	for (int i = 0; i < a; ++i)
	{
		//matrix1[i] = new int[b];
		*(matrix1 + i) = new int[b];
	}

	int** matrix2 = new int*[c];
	for (int i = 0; i < c; ++i)
	{
		//matrix2[i] = new int[d];
		*(matrix2 + i) = new int[d];
	}

	//Fill up Arrays
	int matrix1Val = 1;
	for (int i = 0; i < a; i++)
	{
		for (int j = 0; j < b; j++)
		{
			//matrix1[i][j] = matrix1Val;
			*(*(matrix1 + i) + j) = matrix1Val;
			matrix1Val++;
		}
	}

	int matrix2Val = c * d;
	for (int i = 0; i < c; i++)
	{
		for (int j = 0; j < d; j++)
		{
			//matrix2[i][j] = matrix2Val;
			*(*(matrix2 + i) + j) = matrix2Val;
			matrix2Val--;
		}
	}

	//Print Matrix 1
	cout << "\nMatrix 1" << endl;
	for (int i = 0; i < a; i++)
	{
		for (int j = 0; j < b; j++)
		{
			//std::cout << matrix1[i][j] << " ";
			cout << *(*(matrix1 + i) + j) << " ";
		}
		std::cout << endl;
	}

	//Print Matrix 2
	cout << "\nMatrix 2" << endl;
	for (int i = 0; i < c; i++)
	{
		for (int j = 0; j < d; j++)
		{
			//std::cout << matrix2[i][j] << " ";
			cout << *(*(matrix2 + i) + j) << " ";
		}
		std::cout << endl;
	}

	cout << "\n\n";

	matrixMult(matrix1, matrix2, a, b, c, d);


	cin >> temp;
	return 0;

	
}