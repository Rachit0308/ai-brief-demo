import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProjectStore } from '../store/projectStore';

const BriefPreview: React.FC = () => {
  const navigate = useNavigate();
  const projectInfo = useProjectStore((state) => state.projectInfo);

  const handleEdit = () => {
    navigate('/');
  };

  const handleTeamMatching = () => {
    navigate('/team-matching');
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          Project Brief
        </Typography>
        
        {/* Key Information Cards */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <Paper elevation={2} sx={{ p: 2, height: '100%', bgcolor: 'primary.light', color: 'white' }}>
              <Typography variant="h6" gutterBottom>Timeline</Typography>
              <Typography>{projectInfo.timeline || 'Not specified'}</Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <Paper elevation={2} sx={{ p: 2, height: '100%', bgcolor: 'secondary.light', color: 'white' }}>
              <Typography variant="h6" gutterBottom>Budget Range</Typography>
              <Typography>{projectInfo.budget || 'Not specified'}</Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <Paper elevation={2} sx={{ p: 2, height: '100%', bgcolor: 'success.light', color: 'white' }}>
              <Typography variant="h6" gutterBottom>Team Size</Typography>
              <Typography>{projectInfo.teamSize || 'Not specified'}</Typography>
            </Paper>
          </Box>
        </Box>

        {/* Project Details */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
            Project Details
          </Typography>
          <Divider sx={{ mb: 2 }} />
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <Box sx={{ flex: '1 1 400px', minWidth: 0 }}>
              <Typography variant="h6" gutterBottom>Project Type</Typography>
              <Typography paragraph>{projectInfo.projectType || 'Not specified'}</Typography>

              <Typography variant="h6" gutterBottom>Target Audience</Typography>
              <Typography paragraph>{projectInfo.targetAudience || 'Not specified'}</Typography>

              <Typography variant="h6" gutterBottom>Existing Systems</Typography>
              <Typography paragraph>{projectInfo.existingSystems || 'Not specified'}</Typography>
            </Box>
            
            <Box sx={{ flex: '1 1 400px', minWidth: 0 }}>
              <Typography variant="h6" gutterBottom>Success Metrics</Typography>
              <Typography paragraph>{projectInfo.successMetrics || 'Not specified'}</Typography>

              <Typography variant="h6" gutterBottom>Security Requirements</Typography>
              <Typography paragraph>{projectInfo.securityRequirements || 'Not specified'}</Typography>
            </Box>
          </Box>
        </Box>

        {/* Key Features */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
            Key Features
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {projectInfo.keyFeatures?.map((feature, index) => (
              <Chip
                key={index}
                label={feature}
                color="primary"
                variant="outlined"
                sx={{ m: 0.5 }}
              />
            )) || <Typography>No features specified</Typography>}
          </Box>
        </Box>

        {/* Technical Requirements */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
            Technical Requirements
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {projectInfo.technicalRequirements?.map((req, index) => (
              <Chip
                key={index}
                label={req}
                color="secondary"
                variant="outlined"
                sx={{ m: 0.5 }}
              />
            )) || <Typography>No technical requirements specified</Typography>}
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 4 }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleEdit}
          >
            Edit Brief
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleTeamMatching}
          >
            Find Team Members
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default BriefPreview; 