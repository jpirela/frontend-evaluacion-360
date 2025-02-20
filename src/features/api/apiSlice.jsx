import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAuthToken } from '../../app/authUtils';

// 🔹 Obtener lista de empleados
export const fetchEmployees = createAsyncThunk('api/fetchEmployees', async (_, { rejectWithValue }) => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing');

    const response = await axios.get('/employees', {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// 🔹 Obtener detalles de un empleado por ID
export const fetchEmployeeById = createAsyncThunk('api/fetchEmployeeById', async (id, { rejectWithValue }) => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing');

    const response = await axios.get(`/employees/${id}`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// 🔹 Crear una evaluación
export const createEvaluation = createAsyncThunk('api/createEvaluation', async (evaluationData, { rejectWithValue }) => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing');

    const response = await axios.post('/evaluations', evaluationData, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// 🔹 Obtener detalles de una evaluación
export const fetchEvaluationById = createAsyncThunk('api/fetchEvaluationById', async (id, { rejectWithValue }) => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing');

    const response = await axios.get(`/evaluations/${id}`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// 🔹 Actualizar evaluación
export const updateEvaluation = createAsyncThunk('api/updateEvaluation', async ({ id, evaluationData }, { rejectWithValue }) => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing');

    const response = await axios.put(`/evaluations/${id}`, evaluationData, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// 🔹 Obtener evaluaciones de un empleado
export const fetchEvaluationsByEmployee = createAsyncThunk('api/fetchEvaluationsByEmployee', async (id, { rejectWithValue }) => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing');

    const response = await axios.get(`/evaluations/employee/${id}`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// 🔹 Enviar feedback
export const submitFeedback = createAsyncThunk('api/submitFeedback', async (feedbackData, { rejectWithValue }) => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing');

    const response = await axios.post('/feedback', feedbackData, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// 🔹 Obtener feedback por evaluación
export const fetchFeedbackByEvaluation = createAsyncThunk('api/fetchFeedbackByEvaluation', async (id, { rejectWithValue }) => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing');

    const response = await axios.get(`/feedback/evaluation/${id}`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// 🔹 Generar reporte de evaluación
export const fetchReportByEmployee = createAsyncThunk('api/fetchReportByEmployee', async (id, { rejectWithValue }) => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing');

    const response = await axios.get(`/reports/employee/${id}`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

const initialState = {
  employees: [],
  evaluations: [],
  feedbacks: [],
  reports: [],
  status: 'idle',
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchEmployees.fulfilled, (state, action) => { state.status = 'succeeded'; state.employees = action.payload; })
      .addCase(fetchEmployees.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload; })

      .addCase(fetchEmployeeById.fulfilled, (state, action) => { state.status = 'succeeded'; })
      .addCase(fetchEmployeeById.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload; })

      .addCase(createEvaluation.fulfilled, (state, action) => { state.status = 'succeeded'; state.evaluations.push(action.payload); })
      .addCase(createEvaluation.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload; })

      .addCase(fetchEvaluationById.fulfilled, (state, action) => { state.status = 'succeeded'; })
      .addCase(fetchEvaluationById.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload; })

      .addCase(updateEvaluation.fulfilled, (state, action) => { state.status = 'succeeded'; })
      .addCase(updateEvaluation.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload; })

      .addCase(fetchEvaluationsByEmployee.fulfilled, (state, action) => { state.status = 'succeeded'; state.evaluations = action.payload; })
      .addCase(fetchEvaluationsByEmployee.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload; })

      .addCase(submitFeedback.fulfilled, (state, action) => { state.status = 'succeeded'; state.feedbacks.push(action.payload); })
      .addCase(submitFeedback.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload; })

      .addCase(fetchFeedbackByEvaluation.fulfilled, (state, action) => { state.status = 'succeeded'; })
      .addCase(fetchFeedbackByEvaluation.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload; })

      .addCase(fetchReportByEmployee.fulfilled, (state, action) => { state.status = 'succeeded'; state.reports.push(action.payload); })
      .addCase(fetchReportByEmployee.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload; });
  },
});

export default apiSlice.reducer;
